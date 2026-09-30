MARKET OBJECT BOUNDARY

EXECUTION TRUTH
The actual broker symbol, timestamps, prices, spread, fills, and execution records supplied by the trader.

REFERENCE TRUTH
GC=F / COMEX Gold futures used for standardized market reconstruction.

XAUUSD and GC=F MUST NOT be silently equated.

Every trade record should retain:
broker_symbol
reference_symbol
broker timestamps/prices
reference timestamps/prices

Differences between spot/CFD and futures may arise from feed construction, contract mechanics, spread, rollover, session handling, and timestamp conventions. These differences are part of the evidence, not noise to erase.
