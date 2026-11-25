---
title: A filter name that the web client's demo-mode search does not know is treated as plain search text.
status: active
semantic_text: A filter name that the web client's demo-mode search does not know is treated as plain search text.
semantic_clauses:
  - A filter name that the web client's demo-mode search does not know is treated as plain search text
logic_claims:
  - CLAIM-AFB9081EA7A3CEEE
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d95e038b3732b09e9b84140eef216dba01181d11291e597a0ed7c4635852d256
semantic_inventory:
  - claim_key: CLAIM-AFB9081EA7A3CEEE
    claim_text: A filter name that the web client's demo-mode search does not know is treated as plain search text
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 98
    subjects:
      - client.web_client_demo_mode_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Web client decision log (apps/papra-client): WCL-198'
  recorded_at: '2026-04-08T16:19:04.000Z'
tags:
  - bootstrap
  - knowledge-source:client-decisions
  - component:client
rationale: A mistyped filter name silently widened the search.
id: REQ-client-web-client-demo-mode-search-unknown-filter
type: req
---
A filter name that the web client's demo-mode search does not know is treated as plain search text.

## Context

A mistyped filter name silently widened the search.

## Source

> feat(client): unknown search filters (WCL-198)

Source: Web client decision log (apps/papra-client) - WCL-198
