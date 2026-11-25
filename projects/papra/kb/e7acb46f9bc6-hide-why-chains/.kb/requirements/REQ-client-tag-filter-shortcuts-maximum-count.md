---
title: At most 25 tag filter shortcuts can be created per user in the web client; the limit is fixed.
status: active
semantic_text: At most 25 tag filter shortcuts can be created per user in the web client; the limit is fixed.
semantic_clauses:
  - At most 25 tag filter shortcuts can be created per user in the web client
  - the limit is fixed
logic_claims:
  - CLAIM-2FDDFEEE0A5E26FE
  - CLAIM-9B85215C347D6099
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a7a2818c6c2af7a1927f026470d2ef4b61e44c75b2823d0743bcdc01ed338692
semantic_inventory:
  - claim_key: CLAIM-2FDDFEEE0A5E26FE
    claim_text: At most 25 tag filter shortcuts can be created per user in the web client
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 73
    subjects:
      - client.tag_filter_shortcuts
  - claim_key: CLAIM-9B85215C347D6099
    claim_text: the limit is fixed
    role: descriptive
    status: modeled
    span:
      start: 75
      end: 93
    subjects:
      - client.tag_filter_shortcuts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Web client decision log (apps/papra-client): WCL-165'
  recorded_at: '2025-12-02T17:27:12.000Z'
tags:
  - bootstrap
  - knowledge-source:client-decisions
  - component:client
id: REQ-client-tag-filter-shortcuts-maximum-count
type: req
---
At most 25 tag filter shortcuts can be created per user in the web client; the limit is fixed.

## Context

Reason not stated.

## Why this changed

Reason not stated. WCL-165 replaces the value recorded in WCL-95 without saying why it changed.

## Source

> feat(client): limit tag filter shortcuts per user (WCL-165)

Source: Web client decision log (apps/papra-client) - WCL-165
