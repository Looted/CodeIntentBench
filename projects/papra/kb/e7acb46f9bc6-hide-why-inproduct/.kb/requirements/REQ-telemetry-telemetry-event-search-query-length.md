---
title: A query in the telemetry event search is limited to 500 characters; longer input is cut to the limit without an error.
status: active
semantic_text: A query in the telemetry event search is limited to 500 characters; longer input is cut to the limit without an error.
semantic_clauses:
  - A query in the telemetry event search is limited to 500 characters
  - longer input is cut to the limit without an error
logic_claims:
  - CLAIM-8291A0851A610DA0
  - CLAIM-7ABD8CACE2C520A4
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 7e9cce34c53899dafc0cbb51cace73ffe156d094e684bc2ea704805940f4651a
semantic_inventory:
  - claim_key: CLAIM-8291A0851A610DA0
    claim_text: A query in the telemetry event search is limited to 500 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 66
    subjects:
      - telemetry.telemetry_event_search
  - claim_key: CLAIM-7ABD8CACE2C520A4
    claim_text: longer input is cut to the limit without an error
    role: descriptive
    status: modeled
    span:
      start: 68
      end: 117
    subjects:
      - telemetry.telemetry_event_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-132'
  recorded_at: '2025-03-05T15:11:48.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
rationale: Very long queries were used to slow the search backend down.
id: REQ-telemetry-telemetry-event-search-query-length
type: req
---
A query in the telemetry event search is limited to 500 characters; longer input is cut to the limit without an error.

## Context

Very long queries were used to slow the search backend down.

## Source

> feat(telemetry): limit search query length to 500 (TEL-132)

Source: Telemetry dashboard decision log - TEL-132
