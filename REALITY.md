GOLDSELFSCAN / GOLDMICRO REALITY

PURPOSE
Execution reconstruction of an established human Gold edge.

MARKET BOUNDARY
Broker/XAUUSD execution data is execution truth. GC=F is the standardized reconstruction reference. They are distinct market objects and must remain distinct in persisted records.

TEMPORAL ORDER
H4/H1/M15 -> context
M5 -> primary trade reality
M1 -> admission and exit precision
-25m..+25m -> reconstruction window

STATE MACHINE
OBSERVE -> ARMING -> ADMISSION_WINDOW -> ACTIVE -> EXHAUSTION -> RESET

AUTHORITY BOUNDARY
GOLDMICRO observations, thoughts, classifications, and reconstructions do not constitute execution authority. No persisted thought may be interpreted as an order.

TRADE AUTOPSY PRINCIPLE
Reconstruct what the trader did and what Gold did as two separate timelines. Never infer a timing diagnosis solely from realized P/L.

COUNTERFACTUALS
Counterfactual analysis may identify hypothetical earlier/later admission points, but must preserve the actual trade separately and must not rewrite history.

REALIZATION
A realization threshold must be declared before outcome inspection for any falsifiable experiment. Do not retrofit thresholds to favorable outcomes.
