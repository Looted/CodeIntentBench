---
title: A filter name that the telemetry event search does not know is rejected with a list of the known filters.
status: active
semantic_text: A filter name that the telemetry event search does not know is rejected with a list of the known filters.
semantic_clauses:
  - A filter name that the telemetry event search does not know is rejected with a list of the known filters
logic_claims:
  - CLAIM-6358C2D3CA4481A0
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 5582d3163500714939929163cf308d5014229aa08c0fc09b91b9fb263411cade
semantic_inventory:
  - claim_key: CLAIM-6358C2D3CA4481A0
    claim_text: A filter name that the telemetry event search does not know is rejected with a list of the known filters
    role: normative
    status: modeled
    span:
      start: 0
      end: 104
    subjects:
      - telemetry.telemetry_event_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-168'
  recorded_at: '2026-06-03T16:34:28.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
rationale: Text with a colon in it, such as a time, is a common thing to search for.
id: REQ-telemetry-telemetry-event-search-unknown-filter
type: req
---
A filter name that the telemetry event search does not know is rejected with a list of the known filters.

## Context

Text with a colon in it, such as a time, is a common thing to search for.

## Source

> feat(telemetry): unknown search filters (TEL-168)

Source: Telemetry dashboard decision log - TEL-168
