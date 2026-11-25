---
title: The telemetry event search runs only once the query has at least 1 character.
status: active
semantic_text: The telemetry event search runs only once the query has at least 1 character.
semantic_clauses:
  - The telemetry event search runs only once the query has at least 1 character
logic_claims:
  - CLAIM-E4A68EB4D8EB09FF
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 305c01beabfff5e31a1e510a11a17474d64a95c5c3208f252a2d7991d13ae153
semantic_inventory:
  - claim_key: CLAIM-E4A68EB4D8EB09FF
    claim_text: The telemetry event search runs only once the query has at least 1 character
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 76
    subjects:
      - telemetry.telemetry_event_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-153'
  recorded_at: '2025-12-03T09:24:41.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
id: REQ-telemetry-telemetry-event-search-minimum-length
type: req
---
The telemetry event search runs only once the query has at least 1 character.

## Context

Reason not stated.

## Source

> feat(telemetry): minimum query length 1 (TEL-153)

Source: Telemetry dashboard decision log - TEL-153
