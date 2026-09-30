# Scanner-Native Execution Gate

This is the executable research layer for GOLDSELFSCAN.

No MT5. No broker terminal dependency. No live trading.

The scanner consumes explicitly supplied market data and emits deterministic observation records. It does not place orders or declare an edge.

Pipeline:

DATA FILES -> SCAN MANIFEST -> SCANNER -> OBSERVATIONS -> EVIDENCE RECEIPT

The scanner operates on supplied OHLCV data. Market identity is carried in the manifest and is never inferred from the filename.

The output is an observation artifact, not a trade signal.
