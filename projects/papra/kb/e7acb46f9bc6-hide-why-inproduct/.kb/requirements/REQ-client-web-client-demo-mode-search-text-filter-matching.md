---
title: 'The name: filter of the web client''s demo-mode search uses prefix matching, not contains matching.'
status: active
semantic_text: 'The name: filter of the web client''s demo-mode search uses prefix matching, not contains matching.'
semantic_clauses:
  - 'The name: filter of the web client''s demo-mode search uses prefix matching, not contains matching'
logic_claims:
  - CLAIM-AF7659B03A1B6B9C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e5da0505e7759fb9a6bf20b4b00445a46cdbb9890351b28574f4653498aed7ee
semantic_inventory:
  - claim_key: CLAIM-AF7659B03A1B6B9C
    claim_text: 'The name: filter of the web client''s demo-mode search uses prefix matching, not contains matching'
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 97
    subjects:
      - client.web_client_demo_mode_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Web client decision log (apps/papra-client): WCL-171'
  recorded_at: '2026-04-16T14:12:00.000Z'
tags:
  - bootstrap
  - knowledge-source:client-decisions
  - component:client
rationale: Results that only contained the term somewhere drowned the one that was asked for.
id: REQ-client-web-client-demo-mode-search-text-filter-matching
type: req
---
The name: filter of the web client's demo-mode search uses prefix matching, not contains matching.

## Context

Results that only contained the term somewhere drowned the one that was asked for.

## Source

> feat(client): name: filter matching (WCL-171)

Source: Web client decision log (apps/papra-client) - WCL-171
