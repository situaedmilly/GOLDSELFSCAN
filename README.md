# GOLDSELFSCAN

## GOLDMICRO v3 — Execution Reconstruction

This repository is the canonical persistence surface for the GOLDMICRO reality.

GOLDMICRO does **not** discover whether Gold has an edge. It reconstructs the mechanics of an established human Gold execution edge.

### Market identity

- Broker execution truth: the user's actual broker/XAUUSD feed.
- Reconstruction reference: `GC=F` / COMEX Gold futures.
- These market objects MUST NOT be silently equated.

### Temporal architecture

```
H4 / H1 / M15  = context
M5              = primary trade reality
M1              = admission / exit precision
+5m ... +25m    = forward realization window
```

### State machine

```
OBSERVE
  -> ARMING
  -> ADMISSION_WINDOW
  -> ACTIVE
  -> EXHAUSTION
  -> RESET
```

ENTER is not a machine state. The system observes and records market states; persisted thought is not execution authority.

### Core distinction

Every reconstruction separates:

- EDGE
- DIRECTION
- ADMISSION
- REALIZATION
- EXIT

A directionally correct trade entered too early is not equivalent to a directionally wrong trade.

### Thought surface

The `THOUGHTS` branch is an explicit writable cognitive surface for GPTSELF, OTHERGBTSELF, and human observations.

```
THOUGHTS != AUTHORITY
THOUGHTS != TRADE SIGNAL
THOUGHTS != EXECUTION
THOUGHTS = PERSISTED COGNITIVE RECORD
```

See `REALITY.md` and `schemas/` for the canonical contracts.
