---
title: A query in the telemetry dashboard search is limited to 100 characters; longer input is cut to the limit without an error.
status: active
semantic_text: A query in the telemetry dashboard search is limited to 100 characters; longer input is cut to the limit without an error.
semantic_clauses:
  - A query in the telemetry dashboard search is limited to 100 characters
  - longer input is cut to the limit without an error
logic_claims:
  - CLAIM-70AE7E1ADD6BA920
  - CLAIM-7ABD8CACE2C520A4
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 22c962af58c9304a79af22bdd6e2c830c6417f64d2fc7aa464435aa6e6bbd486
semantic_inventory:
  - claim_key: CLAIM-70AE7E1ADD6BA920
    claim_text: A query in the telemetry dashboard search is limited to 100 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 70
    subjects:
      - telemetry.telemetry_dashboard_search
  - claim_key: CLAIM-7ABD8CACE2C520A4
    claim_text: longer input is cut to the limit without an error
    role: descriptive
    status: modeled
    span:
      start: 72
      end: 121
    subjects:
      - telemetry.telemetry_dashboard_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-199'
  recorded_at: '2025-02-08T13:30:59.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
rationale: Very long queries were used to slow the search backend down.
id: REQ-telemetry-telemetry-dashboard-search-query-length
type: req
---
A query in the telemetry dashboard search is limited to 100 characters; longer input is cut to the limit without an error.

## Context

Very long queries were used to slow the search backend down.

## Source

> feat(telemetry): limit search query length to 100 (TEL-199)

Source: Telemetry dashboard decision log - TEL-199
