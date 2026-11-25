---
title: Matching in the web client's demo-mode search is case-sensitive.
status: active
semantic_text: Matching in the web client's demo-mode search is case-sensitive.
semantic_clauses:
  - Matching in the web client's demo-mode search is case-sensitive
logic_claims:
  - CLAIM-A65ADE6E272F84D4
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a9af6c4bc036daa017016b3c922fe18c998e6c3b588c2b1cd4b7077315ccce14
semantic_inventory:
  - claim_key: CLAIM-A65ADE6E272F84D4
    claim_text: Matching in the web client's demo-mode search is case-sensitive
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 63
    subjects:
      - client.web_client_demo_mode_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Web client decision log (apps/papra-client): WCL-245'
  recorded_at: '2025-09-12T17:39:36.000Z'
tags:
  - bootstrap
  - knowledge-source:client-decisions
  - component:client
rationale: Names are typed on phones, where capitals and accents are often left out.
id: REQ-client-web-client-demo-mode-search-case-folding
type: req
---
Matching in the web client's demo-mode search is case-sensitive.

## Context

Names are typed on phones, where capitals and accents are often left out.

## Source

> feat(client): search case folding (WCL-245)

Source: Web client decision log (apps/papra-client) - WCL-245
