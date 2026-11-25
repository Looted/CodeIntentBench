---
title: At most 25 changelog labels can be added or removed in one request on the marketing website.
status: active
semantic_text: At most 25 changelog labels can be added or removed in one request on the marketing website.
semantic_clauses:
  - At most 25 changelog labels can be added or removed in one request on the marketing website
logic_claims:
  - CLAIM-2E643936A6532271
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e8ba5a747b1014caf49cc23f00737750309289521e71ffea1d98dbdca6ff72d5
semantic_inventory:
  - claim_key: CLAIM-2E643936A6532271
    claim_text: At most 25 changelog labels can be added or removed in one request on the marketing website
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 91
    subjects:
      - website.changelog_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-189'
  recorded_at: '2025-09-23T08:43:31.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
rationale: Requests with more than 25 changelog labels timed out on slow connections.
id: REQ-website-changelog-labels-batch-size
type: req
---
At most 25 changelog labels can be added or removed in one request on the marketing website.

## Context

Requests with more than 25 changelog labels timed out on slow connections.

## Source

> feat(website): batch changelog labels, 25 per request (WEB-189)

Source: Marketing website decision log (apps/website) - WEB-189
