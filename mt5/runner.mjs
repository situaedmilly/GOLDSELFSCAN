#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import crypto from "node:crypto";
const manifestPath=process.argv[2];
if(!manifestPath){console.error("USAGE: node mt5/runner.mjs <manifest.json>");process.exit(2);}
const manifest=JSON.parse(fs.readFileSync(manifestPath,"utf8"));
const workloadId=manifest?.workload?.workload_id;
if(!workloadId) throw new Error("INVALID_MANIFEST: workload.workload_id required");
if(manifest?.live_trading!==false) throw new Error("AUTHORITY_BOUNDARY: live trading is prohibited");
const terminal=process.env.MT5_TERMINAL;
const config=process.env.MT5_CONFIG;
if(!terminal||!config) throw new Error("RUNTIME_BOUNDARY: set MT5_TERMINAL and MT5_CONFIG locally");
const startedAt=new Date().toISOString();
const child=spawn(terminal,["/config:"+path.resolve(config),"/portable"],{stdio:"inherit",windowsHide:true});
const timer=setTimeout(()=>child.kill(),Number(manifest?.execution?.timeout_seconds??3600)*1000);
child.on("exit",(code,signal)=>{clearTimeout(timer);const receipt={schema:"GOLDSELFSCAN.MT5_EXECUTION_RECEIPT.v0.1",workload_id:workloadId,source_commit:manifest?.workload?.source_commit??null,started_at:startedAt,finished_at:new Date().toISOString(),exit_code:code,signal:signal??null,terminal_config_sha256:crypto.createHash("sha256").update(fs.readFileSync(config)).digest("hex"),status:code===0?"PROCESS_EXITED_ZERO":"PROCESS_FAILED",authority:"RESEARCH_ONLY",live_trading:false};process.stdout.write(JSON.stringify(receipt,null,2)+"\n");process.exit(code??1);});
