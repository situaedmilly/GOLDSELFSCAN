# Scanner Gate v0.1

Admission requires:

1. explicit scan_id
2. explicit source data paths
3. explicit instrument identity
4. explicit timeframe
5. explicit predicate
6. live_trading=false
7. output_is_signal=false

The scanner may identify candidate observations satisfying the declared mathematical predicate.

It may not:
- place orders
- access broker execution
- convert an observation into an order
- infer missing market identity
- rewrite historical rows
- silently substitute XAUUSD for GC=F or vice versa

A scan receipt proves what data and predicate were processed. It does not prove predictive validity or profitability.
