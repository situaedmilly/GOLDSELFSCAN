# HOURLY AUTONOMOUS SCAN — RUNTIME CONTRACT

The scan cadence is intentionally specified as TOP_OF_HOUR and must be owned by a runtime scheduler capable of hourly recurrence.

Cloud task scheduler limitation:
The currently available ChatGPT automation surface supports daily/weekly/monthly recurrence and cannot truthfully instantiate an hourly RRULE.

Required runtime behavior:
- trigger at every HH:00
- acquire broker-native MT5 XAUUSD H4 + M5 candles
- acquire independent spot/macro context
- compute market-frequency features
- generate one immutable hypothesis for the following 60 minutes
- persist to thoughts/YYYY-MM-DD/GPTSELF/HH00.md
- after window close, append REALISELF outcome in a separate immutable record
- never rewrite the original forecast
- maintain hypothesis_id → outcome lineage

Required data contract:
H4: closed OHLC candles + indicators
M5: closed OHLC candles + current forming candle marked separately
Frequency: returns, realized volatility, ATR/range, directional persistence, compression/expansion, cross-timeframe alignment
Context: USD/yields/news when available
Provenance: provider, symbol, timestamp, timezone, freshness, broker/server identity

Failure states:
NO_DATA
STALE_DATA
CONFLICTING_FEEDS
INCOMPLETE_5M
INCOMPLETE_4H

No fabricated candles, no inferred timestamps, no retrospective forecast edits.
