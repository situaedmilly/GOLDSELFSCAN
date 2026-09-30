#!/usr/bin/env node
import fs from "node:fs";
import crypto from "node:crypto";

const manifestPath = process.argv[2];
if (!manifestPath) throw new Error("USAGE: node scanner/scan.mjs <manifest.json>");

const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
if (manifest?.authority?.live_trading !== false) throw new Error("AUTHORITY_BOUNDARY: live trading prohibited");
if (manifest?.authority?.output_is_signal !== false) throw new Error("AUTHORITY_BOUNDARY: output is observation only");

function csv(file) {
  const lines = fs.readFileSync(file, "utf8").trim().split(/\r?\n/);
  if (!lines.length) return [];
  const headers = lines.shift().split(",").map(x => x.trim().toLowerCase());
  return lines.filter(Boolean).map(line => {
    const v = line.split(",");
    const o = Object.fromEntries(headers.map((h,i) => [h, v[i]?.trim()]));
    return {
      timestamp: o.timestamp ?? o.time ?? o.date,
      open: Number(o.open), high: Number(o.high), low: Number(o.low), close: Number(o.close),
      volume: Number(o.volume ?? 0)
    };
  });
}

function sha256(file) {
  return crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
}

function atrAt(rows, i, period) {
  if (i < period) return null;
  const trs = [];
  for (let j=i-period+1; j<=i; j++) {
    const prev = rows[j-1]?.close ?? rows[j].open;
    trs.push(Math.max(rows[j].high-rows[j].low, Math.abs(rows[j].high-prev), Math.abs(rows[j].low-prev)));
  }
  return trs.reduce((a,b)=>a+b,0)/trs.length;
}

const rows = csv(manifest.inputs.m5_csv);
const p = manifest.predicate;
const period = Number(manifest.window?.atr_period ?? 14);
const observations = [];

for (let i=period; i<rows.length; i++) {
  const r=rows[i];
  const range=r.high-r.low;
  if (!(range>0)) continue;
  const body=Math.abs(r.close-r.open);
  const atr=atrAt(rows,i,period);
  if (!(atr>0)) continue;
  const bodyRatio=body/range;
  const rangeAtrRatio=range/atr;
  if (bodyRatio < p.min_body_ratio || rangeAtrRatio < p.min_range_atr_ratio) continue;

  observations.push({
    schema:"GOLDSELFSCAN.OBSERVATION.v0.1",
    timestamp:r.timestamp,
    instrument:manifest.instrument,
    timeframe:manifest.timeframes.primary,
    direction:r.close>r.open ? "UP" : r.close<r.open ? "DOWN" : "FLAT",
    metrics:{range,body,body_ratio:bodyRatio,atr,range_atr_ratio:rangeAtrRatio},
    classification:"CANDIDATE_OBSERVATION",
    authority:"OBSERVATION_ONLY"
  });
}

const result={
  schema:"GOLDSELFSCAN.SCAN_RECEIPT.v0.1",
  scan_id:manifest.scan_id,
  source_commit:manifest.source_commit ?? null,
  input_sha256:{
    m5:sha256(manifest.inputs.m5_csv),
    ...(manifest.inputs.m1_csv ? {m1:sha256(manifest.inputs.m1_csv)} : {})
  },
  rows_scanned:rows.length,
  observations_emitted:observations.length,
  live_trading:false,
  output_is_signal:false
};

fs.writeFileSync(process.stdout.fd, observations.map(x=>JSON.stringify(x)).join("\n") + (observations.length?"\n":""));
process.stderr.write(JSON.stringify(result,null,2)+"\n");
