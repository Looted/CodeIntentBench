---
title: 'An invalid date in the at: filter of the telemetry event search is ignored and the other filters still apply.'
status: active
semantic_text: 'An invalid date in the at: filter of the telemetry event search is ignored and the other filters still apply.'
semantic_clauses:
  - 'An invalid date in the at: filter of the telemetry event search is ignored and the other filters still apply'
logic_claims:
  - CLAIM-0B04F260B4C1A6CD
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: dc491f253fa37031ebf15ac2d560c4d174bcfa907af6b1e060cbdc94be1dd271
semantic_inventory:
  - claim_key: CLAIM-0B04F260B4C1A6CD
    claim_text: 'An invalid date in the at: filter of the telemetry event search is ignored and the other filters still apply'
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 108
    subjects:
      - telemetry.telemetry_event_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-161'
  recorded_at: '2025-02-03T11:56:53.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
rationale: People mistyped a date, got an empty list and assumed nothing existed.
id: REQ-telemetry-telemetry-event-search-invalid-date
type: req
---
An invalid date in the at: filter of the telemetry event search is ignored and the other filters still apply.

## Context

People mistyped a date, got an empty list and assumed nothing existed.

## Source

> fix(telemetry): invalid date in at: filter (TEL-161)

Source: Telemetry dashboard decision log - TEL-161
