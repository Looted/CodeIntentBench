---
title: 'The name: filter of the telemetry dashboard search uses prefix matching, not contains matching.'
status: active
semantic_text: 'The name: filter of the telemetry dashboard search uses prefix matching, not contains matching.'
semantic_clauses:
  - 'The name: filter of the telemetry dashboard search uses prefix matching, not contains matching'
logic_claims:
  - CLAIM-BFE0473AFCAEB8A2
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 71d4469b5458b8f5d34c7e4cdf7daa7add37ed906a2e4dbf07bc14f1c3f10284
semantic_inventory:
  - claim_key: CLAIM-BFE0473AFCAEB8A2
    claim_text: 'The name: filter of the telemetry dashboard search uses prefix matching, not contains matching'
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 94
    subjects:
      - telemetry.telemetry_dashboard_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-210'
  recorded_at: '2025-11-04T09:25:00.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
rationale: People remember a fragment of a name, rarely all of it.
id: REQ-telemetry-telemetry-dashboard-search-text-filter-matching
type: req
---
The name: filter of the telemetry dashboard search uses prefix matching, not contains matching.

## Context

People remember a fragment of a name, rarely all of it.

## Source

> feat(telemetry): name: filter matching (TEL-210)

Source: Telemetry dashboard decision log - TEL-210
