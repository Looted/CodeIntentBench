---
title: 'An invalid date in the created: filter of the telemetry dashboard search makes the search return nothing.'
status: active
semantic_text: 'An invalid date in the created: filter of the telemetry dashboard search makes the search return nothing.'
semantic_clauses:
  - 'An invalid date in the created: filter of the telemetry dashboard search makes the search return nothing'
logic_claims:
  - CLAIM-8D6FA6AB34D87C5B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2b957e59db132efe16b90dd941a0730e4e2a8d33e72d3de43daf46b4806df2b4
semantic_inventory:
  - claim_key: CLAIM-8D6FA6AB34D87C5B
    claim_text: 'An invalid date in the created: filter of the telemetry dashboard search makes the search return nothing'
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 104
    subjects:
      - telemetry.telemetry_dashboard_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-207'
  recorded_at: '2026-04-04T14:51:13.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
id: REQ-telemetry-telemetry-dashboard-search-invalid-date
type: req
---
An invalid date in the created: filter of the telemetry dashboard search makes the search return nothing.

## Context

Reason not stated.

## Source

> fix(telemetry): invalid date in created: filter (TEL-207)

Source: Telemetry dashboard decision log - TEL-207
