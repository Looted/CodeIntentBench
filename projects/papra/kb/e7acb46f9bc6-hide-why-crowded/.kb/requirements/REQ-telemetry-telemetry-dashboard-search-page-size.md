---
title: The telemetry dashboard search returns at most 10 results per page.
status: active
semantic_text: The telemetry dashboard search returns at most 10 results per page.
semantic_clauses:
  - The telemetry dashboard search returns at most 10 results per page
logic_claims:
  - CLAIM-CF125EA2DBD2B2D5
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 5caf6e21c7b7653f4c11a119ea759f1024c219ceda8744aa213c1713780679e7
semantic_inventory:
  - claim_key: CLAIM-CF125EA2DBD2B2D5
    claim_text: The telemetry dashboard search returns at most 10 results per page
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 66
    subjects:
      - telemetry.telemetry_dashboard_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-220'
  recorded_at: '2025-04-23T14:57:14.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
rationale: Larger pages were slow on the devices most people use.
id: REQ-telemetry-telemetry-dashboard-search-page-size
type: req
---
The telemetry dashboard search returns at most 10 results per page.

## Context

Larger pages were slow on the devices most people use.

## Source

> feat(telemetry): 10 results per page (TEL-220)

Source: Telemetry dashboard decision log - TEL-220
