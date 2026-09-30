# MT5 Scanner Alchemy

This layer turns GOLDSELFSCAN from a reconstruction schema into an executable experiment contract around MetaTrader 5.

## Boundary

GOLDSELFSCAN remains the research authority. MT5 is an execution substrate for market-data acquisition and Strategy Tester runs.

MT5 output is evidence, not authority.

THOUGHTS may propose experiments. An experiment manifest is the admitted workload. A result receipt records what actually executed.

## Pipeline

STRATEGY_SPEC -> EXPERIMENT_MANIFEST -> MT5_WORKLOAD -> MT5_EXECUTION -> RAW_ARTIFACT -> NORMALIZED_RESULT -> RECEIPT

## Isolation

Each workload receives a unique workload_id and filesystem/profile boundary. Parallelism is an orchestration concern; MT5 is not treated as a distributed cluster coordinator.

Portable terminal instances are isolated by data directory. Do not infer network-port isolation from filesystem isolation.

## Required provenance

Every result must retain:
- repository commit
- workload id
- EA identifier/version
- symbol and timeframe
- test interval
- model/mode
- parameter vector
- MT5 terminal/runtime identity
- raw artifact references
- normalized metrics
- execution status

A metric without provenance is not an admitted experiment result.

## Non-authority

This layer MUST NOT place live orders. The scanner is research infrastructure only.
