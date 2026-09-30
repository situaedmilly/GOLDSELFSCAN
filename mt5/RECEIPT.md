# MT5 Execution Receipt v0.1

The receipt proves process execution facts only.

It does not prove strategy validity, profitability, causality, or future performance.

## Minimum receipt

- schema
- workload_id
- source_commit
- started_at
- finished_at
- exit_code
- signal
- terminal_config_sha256
- status
- authority
- live_trading

## Admission rule

PROCESS_EXITED_ZERO is not equivalent to EXPERIMENT_VALID.

A normalized experiment result requires both an execution receipt and the raw tester artifact. The validator must reject missing provenance rather than infer it.
