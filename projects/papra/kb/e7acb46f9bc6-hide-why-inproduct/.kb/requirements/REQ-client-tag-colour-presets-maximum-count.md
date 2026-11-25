---
title: At most 300 tag colour presets can be created per organization in the web client; the limit is configurable and 300 is the default.
status: active
semantic_text: At most 300 tag colour presets can be created per organization in the web client; the limit is configurable and 300 is the default.
semantic_clauses:
  - At most 300 tag colour presets can be created per organization in the web client
  - the limit is configurable and 300 is the default
logic_claims:
  - CLAIM-6EFF7F716A6B1C02
  - CLAIM-33B228D1A7AD97C8
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: cc35746073f38c9b6cdeaf6aa3ec22ca1105f6e6c3b06455d688a888c47c579e
semantic_inventory:
  - claim_key: CLAIM-6EFF7F716A6B1C02
    claim_text: At most 300 tag colour presets can be created per organization in the web client
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 80
    subjects:
      - client.tag_colour_presets
  - claim_key: CLAIM-33B228D1A7AD97C8
    claim_text: the limit is configurable and 300 is the default
    role: descriptive
    status: modeled
    span:
      start: 82
      end: 130
    subjects:
      - client.tag_colour_presets
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Web client decision log (apps/papra-client): WCL-144'
  recorded_at: '2025-12-15T15:08:41.000Z'
tags:
  - bootstrap
  - knowledge-source:client-decisions
  - component:client
rationale: An unbounded number of tag colour presets had been used to store data the feature was never meant for.
id: REQ-client-tag-colour-presets-maximum-count
type: req
---
At most 300 tag colour presets can be created per organization in the web client; the limit is configurable and 300 is the default.

## Context

An unbounded number of tag colour presets had been used to store data the feature was never meant for.

## Source

> feat(client): limit tag colour presets per organization (WCL-144)

Source: Web client decision log (apps/papra-client) - WCL-144
