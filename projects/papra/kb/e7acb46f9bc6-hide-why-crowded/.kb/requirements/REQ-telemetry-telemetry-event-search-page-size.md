---
title: The telemetry event search returns at most 100 results per page.
status: active
semantic_text: The telemetry event search returns at most 100 results per page.
semantic_clauses:
  - The telemetry event search returns at most 100 results per page
logic_claims:
  - CLAIM-B7F954EAFC133FF1
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 77cb3e99ae2079ed7395df48021f54f59059013dd3deef0b5b080cb183194926
semantic_inventory:
  - claim_key: CLAIM-B7F954EAFC133FF1
    claim_text: The telemetry event search returns at most 100 results per page
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 63
    subjects:
      - telemetry.telemetry_event_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-176'
  recorded_at: '2026-06-10T13:34:25.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
rationale: The response of a larger page was too big for mobile connections.
id: REQ-telemetry-telemetry-event-search-page-size
type: req
---
The telemetry event search returns at most 100 results per page.

## Context

The response of a larger page was too big for mobile connections.

## Source

> feat(telemetry): 100 results per page (TEL-176)

Source: Telemetry dashboard decision log - TEL-176
