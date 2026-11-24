---
title: A query in the web client's demo-mode search is limited to 512 characters; longer input is rejected with a validation error.
status: active
semantic_text: A query in the web client's demo-mode search is limited to 512 characters; longer input is rejected with a validation error.
semantic_clauses:
  - A query in the web client's demo-mode search is limited to 512 characters
  - longer input is rejected with a validation error
logic_claims:
  - CLAIM-D6F8CDD444342F32
  - CLAIM-778F39B5CA222673
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 13e04f85527061c5ba7083317cb002a4669e12ba4dfce22c28fe3437b2ae488c
semantic_inventory:
  - claim_key: CLAIM-D6F8CDD444342F32
    claim_text: A query in the web client's demo-mode search is limited to 512 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 73
    subjects:
      - client.web_client_demo_mode_search
  - claim_key: CLAIM-778F39B5CA222673
    claim_text: longer input is rejected with a validation error
    role: normative
    status: modeled
    span:
      start: 75
      end: 123
    subjects:
      - client.web_client_demo_mode_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Web client decision log (apps/papra-client): WCL-222'
  recorded_at: '2026-03-08T16:17:10.000Z'
tags:
  - bootstrap
  - knowledge-source:client-decisions
  - component:client
id: REQ-client-web-client-demo-mode-search-query-length
type: req
---
A query in the web client's demo-mode search is limited to 512 characters; longer input is rejected with a validation error.

## Context

Reason not stated.

## Source

> feat(client): limit search query length to 512 (WCL-222)

Source: Web client decision log (apps/papra-client) - WCL-222
