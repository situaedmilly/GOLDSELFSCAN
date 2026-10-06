# THIRDEYECHAMBOXREALITY — AUTONOMOUS GOLD SCAN

Status: ACTIVE DESIGN / EXECUTION CONTRACT
Instrument: XAUUSD
Objective: every top-of-hour boundary, evaluate the NEXT 60 MINUTES and persist one cognitive thought.

## Runtime cycle

TOP_OF_HOUR
→ ACQUIRE
→ NORMALIZE
→ 4H_PEEP
→ 5M_PEEP
→ MARKET_FREQUENCY
→ ALCHEMY
→ SELFTELLIGENCE_HYPOTHESIS
→ REALISELF
→ TRANSMIT
→ RECEIPT

## Required evidence

### 4H PEEP
Must use closed 4H candles where possible.
Capture:
- timestamp
- OHLC
- structure: HH/HL/LH/LL
- trend state
- range / ATR context
- key support/resistance
- momentum state
- regime classification

### 5M PEEP
Must use closed 5M candles plus current forming candle explicitly marked.
Capture:
- timestamp
- OHLC
- microstructure
- impulse / compression
- liquidity sweep or rejection
- immediate support/resistance
- next-60m path candidates

### MARKET FREQUENCY
Frequency is an evidence layer, not mystical certainty.
Measure:
- return distribution
- realized volatility
- directional persistence
- range expansion/contraction
- 5M-to-4H alignment
- abnormal volume/tick activity when available
- correlation/context inputs when available

## ALCHEMY

ALCHEMY = transformation of independent observations into a falsifiable hypothesis.

Every hypothesis must state:
1. INPUTS
2. TRANSFORMATION
3. EXPECTED STATE
4. INVALIDATION
5. NEXT-60M TEST

No hypothesis is treated as verified intelligence merely because it sounds coherent.

## SELFTELLIGENCE

A hypothesis earns a SELFTELLIGENCE score only after outcome comparison.

Record:
- hypothesis_id
- forecast_window_start
- forecast_window_end
- predicted regime/path
- confidence
- invalidation
- realized outcome
- error classification
- source lineage

Intelligence = repeated predictive performance, not narrative quality.

## REALISELF

REALISELF is the observed market state returned after the forecast window.

Required distinction:
OBSERVATION != HYPOTHESIS != REALIZED OUTCOME != AUTHORITY != EXECUTION.

This branch does not authorize trades.

## DATA SOURCE ALCHEMY

Preferred hierarchy:
1. broker/MT5 XAUUSD candles when available
2. independent XAUUSD spot feed
3. independent market/macro context
4. secondary technical analysis only as corroboration

Broker-specific XAUUSD pricing must never be silently substituted for spot data.

## TRANSMISSION

Canonical record:
thoughts/YYYY-MM-DD/GPTSELF/HH00.md

Each record must contain:
- run_id
- exact top-of-hour timestamp
- next-60m window
- source references
- 4H evidence
- 5M evidence
- market-frequency evidence
- ALCHEMY transformation
- SELFTELLIGENCE hypothesis
- invalidation
- REALISELF result when available
- confidence
- receipt/hash when runtime can provide it

## FAILURE LAW

Missing 4H or 5M evidence = INCOMPLETE SCAN.
Stale data = STALE SCAN.
Conflicting feeds = CONFLICT SCAN.
No invented candles.
No invented frequency.
No retrospective rewriting of forecasts.

THIRD EYE observes.
ALCHEMY transforms.
SELFTELLIGENCE hypothesizes.
REALISELF tests.
THOUGHTS persists.
