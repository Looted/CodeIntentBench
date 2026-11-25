---
title: Dashboard names in the telemetry dashboard are unique per user, regardless of letter case.
status: active
semantic_text: Dashboard names in the telemetry dashboard are unique per user, regardless of letter case.
semantic_clauses:
  - Dashboard names in the telemetry dashboard are unique per user, regardless of letter case
logic_claims:
  - CLAIM-97984E5B6895899D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d461bc67fccc283cbd8d3ba06635d5d709b32f2ee54a8180ad97ca602c7299f4
semantic_inventory:
  - claim_key: CLAIM-97984E5B6895899D
    claim_text: Dashboard names in the telemetry dashboard are unique per user, regardless of letter case
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 89
    subjects:
      - telemetry.dashboards
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-272'
  recorded_at: '2025-09-04T13:13:10.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
rationale: Two dashboards with the same name could not be told apart in the switcher.
id: REQ-telemetry-dashboards-name-uniqueness
type: req
---
Dashboard names in the telemetry dashboard are unique per user, regardless of letter case.

## Context

Two dashboards with the same name could not be told apart in the switcher.

## Source

> feat(telemetry): dashboard name uniqueness (TEL-272)

Source: Telemetry dashboard decision log - TEL-272
