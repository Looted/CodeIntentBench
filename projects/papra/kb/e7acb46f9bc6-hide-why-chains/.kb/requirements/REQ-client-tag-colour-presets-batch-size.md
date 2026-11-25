---
title: At most 20 tag colour presets can be added or removed in one request in the web client.
status: active
semantic_text: At most 20 tag colour presets can be added or removed in one request in the web client.
semantic_clauses:
  - At most 20 tag colour presets can be added or removed in one request in the web client
logic_claims:
  - CLAIM-24DC1D0553BE169E
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: cf1d980953d437fc764d44c70ce6031ce1c89c6a0fe3080122e3ec513d8e98c6
semantic_inventory:
  - claim_key: CLAIM-24DC1D0553BE169E
    claim_text: At most 20 tag colour presets can be added or removed in one request in the web client
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 86
    subjects:
      - client.tag_colour_presets
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Web client decision log (apps/papra-client): WCL-158'
  recorded_at: '2025-11-10T13:30:43.000Z'
tags:
  - bootstrap
  - knowledge-source:client-decisions
  - component:client
rationale: Requests with more than 20 tag colour presets timed out on slow connections.
id: REQ-client-tag-colour-presets-batch-size
type: req
---
At most 20 tag colour presets can be added or removed in one request in the web client.

## Context

Requests with more than 20 tag colour presets timed out on slow connections.

## Source

> feat(client): batch tag colour presets, 20 per request (WCL-158)

Source: Web client decision log (apps/papra-client) - WCL-158
