---
title: Matching in the telemetry dashboard search is case-sensitive.
status: active
semantic_text: Matching in the telemetry dashboard search is case-sensitive.
semantic_clauses:
  - Matching in the telemetry dashboard search is case-sensitive
logic_claims:
  - CLAIM-086A7DEFB77811C7
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e77db1407d3b9e25ab9c2a5d35b25aabc688c6d53326d4279d129e67027def28
semantic_inventory:
  - claim_key: CLAIM-086A7DEFB77811C7
    claim_text: Matching in the telemetry dashboard search is case-sensitive
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 60
    subjects:
      - telemetry.telemetry_dashboard_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-223'
  recorded_at: '2025-08-03T14:20:02.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
rationale: Names are typed on phones, where capitals and accents are often left out.
id: REQ-telemetry-telemetry-dashboard-search-case-folding
type: req
---
Matching in the telemetry dashboard search is case-sensitive.

## Context

Names are typed on phones, where capitals and accents are often left out.

## Source

> feat(telemetry): search case folding (TEL-223)

Source: Telemetry dashboard decision log - TEL-223
