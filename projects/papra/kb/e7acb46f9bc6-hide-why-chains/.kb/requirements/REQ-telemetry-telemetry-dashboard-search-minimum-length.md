---
title: The telemetry dashboard search runs only once the query has at least 1 character.
status: active
semantic_text: The telemetry dashboard search runs only once the query has at least 1 character.
semantic_clauses:
  - The telemetry dashboard search runs only once the query has at least 1 character
logic_claims:
  - CLAIM-6D298319136C9488
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a2e243590d72bcee96b81a765e612752ea823b840e6a95bf2b607d7920527016
semantic_inventory:
  - claim_key: CLAIM-6D298319136C9488
    claim_text: The telemetry dashboard search runs only once the query has at least 1 character
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 80
    subjects:
      - telemetry.telemetry_dashboard_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-218'
  recorded_at: '2025-05-14T13:14:32.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
rationale: One-letter queries matched nearly everything and were slow to render.
id: REQ-telemetry-telemetry-dashboard-search-minimum-length
type: req
---
The telemetry dashboard search runs only once the query has at least 1 character.

## Context

One-letter queries matched nearly everything and were slow to render.

## Source

> feat(telemetry): minimum query length 1 (TEL-218)

Source: Telemetry dashboard decision log - TEL-218
