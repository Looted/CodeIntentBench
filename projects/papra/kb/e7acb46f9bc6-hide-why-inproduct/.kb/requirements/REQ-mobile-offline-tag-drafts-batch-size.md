---
title: At most 50 offline tag drafts can be added or removed in one request in the mobile app.
status: active
semantic_text: At most 50 offline tag drafts can be added or removed in one request in the mobile app.
semantic_clauses:
  - At most 50 offline tag drafts can be added or removed in one request in the mobile app
logic_claims:
  - CLAIM-676ABD8488874916
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 21794495dffb7f217352435df32bc0fb61615cf9c2c545aa6d4350688de3b993
semantic_inventory:
  - claim_key: CLAIM-676ABD8488874916
    claim_text: At most 50 offline tag drafts can be added or removed in one request in the mobile app
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 86
    subjects:
      - mobile.offline_tag_drafts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-151'
  recorded_at: '2025-07-20T08:24:00.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
rationale: Requests with more than 50 offline tag drafts timed out on slow connections.
id: REQ-mobile-offline-tag-drafts-batch-size
type: req
---
At most 50 offline tag drafts can be added or removed in one request in the mobile app.

## Context

Requests with more than 50 offline tag drafts timed out on slow connections.

## Source

> feat(mobile): batch offline tag drafts, 50 per request (MOB-151)

Source: Mobile app decision log (apps/mobile) - MOB-151
