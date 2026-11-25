---
title: 'The event: filter of the telemetry event search uses contains matching, not exact equality.'
status: active
semantic_text: 'The event: filter of the telemetry event search uses contains matching, not exact equality.'
semantic_clauses:
  - 'The event: filter of the telemetry event search uses contains matching, not exact equality'
logic_claims:
  - CLAIM-08DEEECC3EAD312E
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8225c86a04fef2f183c19100c3c1683b6b9e74fa14dad985ea73f7bd2da37124
semantic_inventory:
  - claim_key: CLAIM-08DEEECC3EAD312E
    claim_text: 'The event: filter of the telemetry event search uses contains matching, not exact equality'
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 90
    subjects:
      - telemetry.telemetry_event_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-148'
  recorded_at: '2026-09-28T10:40:53.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
rationale: Results that only contained the term somewhere drowned the one that was asked for.
id: REQ-telemetry-telemetry-event-search-text-filter-matching
type: req
---
The event: filter of the telemetry event search uses contains matching, not exact equality.

## Context

Results that only contained the term somewhere drowned the one that was asked for.

## Source

> feat(telemetry): event: filter matching (TEL-148)

Source: Telemetry dashboard decision log - TEL-148
