---
title: A device can have at most 100 pinned organizations in the mobile app; the limit is configured per deployment and 100 is the default.
status: active
semantic_text: A device can have at most 100 pinned organizations in the mobile app; the limit is configured per deployment and 100 is the default.
semantic_clauses:
  - A device can have at most 100 pinned organizations in the mobile app
  - the limit is configured per deployment and 100 is the default
logic_claims:
  - CLAIM-E9564AD78FCE823F
  - CLAIM-F92BF09F63EFDC08
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: eb3725724559a3facab04222ca5b989c1558ad2280247b9cc5e1a40a9806b849
semantic_inventory:
  - claim_key: CLAIM-E9564AD78FCE823F
    claim_text: A device can have at most 100 pinned organizations in the mobile app
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 68
    subjects:
      - mobile.pinned_organizations
  - claim_key: CLAIM-F92BF09F63EFDC08
    claim_text: the limit is configured per deployment and 100 is the default
    role: descriptive
    status: modeled
    span:
      start: 70
      end: 131
    subjects:
      - mobile.pinned_organizations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-234'
  recorded_at: '2025-05-07T10:24:09.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
id: REQ-mobile-pinned-organizations-maximum-count
type: req
---
A device can have at most 100 pinned organizations in the mobile app; the limit is configured per deployment and 100 is the default.

## Context

Reason not stated.

## Source

> feat(mobile): limit pinned organizations per device (MOB-234)

Source: Mobile app decision log (apps/mobile) - MOB-234
