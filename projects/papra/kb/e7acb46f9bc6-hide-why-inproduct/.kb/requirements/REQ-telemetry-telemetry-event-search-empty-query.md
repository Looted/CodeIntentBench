---
title: An empty query in the telemetry event search returns nothing.
status: active
semantic_text: An empty query in the telemetry event search returns nothing.
semantic_clauses:
  - An empty query in the telemetry event search returns nothing
logic_claims:
  - CLAIM-69F4AF1CDDFC8AF5
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 57c07db10e9f9561a40248b82fa45ea9c5be762de7f662f7ff94564d2a711915
semantic_inventory:
  - claim_key: CLAIM-69F4AF1CDDFC8AF5
    claim_text: An empty query in the telemetry event search returns nothing
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 60
    subjects:
      - telemetry.telemetry_event_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-173'
  recorded_at: '2025-12-23T11:44:57.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
rationale: An empty box that shows nothing looked broken.
id: REQ-telemetry-telemetry-event-search-empty-query
type: req
---
An empty query in the telemetry event search returns nothing.

## Context

An empty box that shows nothing looked broken.

## Source

> feat(telemetry): empty search query (TEL-173)

Source: Telemetry dashboard decision log - TEL-173
