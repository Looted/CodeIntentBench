---
title: At most 100 offline tag drafts can be created per device in the mobile app; the limit is configurable and 100 is the default.
status: active
semantic_text: At most 100 offline tag drafts can be created per device in the mobile app; the limit is configurable and 100 is the default.
semantic_clauses:
  - At most 100 offline tag drafts can be created per device in the mobile app
  - the limit is configurable and 100 is the default
logic_claims:
  - CLAIM-54CA3CF3EE4A67A5
  - CLAIM-C5F9794ACACC3437
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 5a8936c4845dfef51e56c6139be90020429ef2ea527a73af928f3c8108018ea9
semantic_inventory:
  - claim_key: CLAIM-54CA3CF3EE4A67A5
    claim_text: At most 100 offline tag drafts can be created per device in the mobile app
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 74
    subjects:
      - mobile.offline_tag_drafts
  - claim_key: CLAIM-C5F9794ACACC3437
    claim_text: the limit is configurable and 100 is the default
    role: descriptive
    status: modeled
    span:
      start: 76
      end: 124
    subjects:
      - mobile.offline_tag_drafts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-129'
  recorded_at: '2025-09-26T10:34:51.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
rationale: Lists of offline tag drafts are loaded in one request, and beyond a few hundred the screen became slow.
id: REQ-mobile-offline-tag-drafts-maximum-count
type: req
---
At most 100 offline tag drafts can be created per device in the mobile app; the limit is configurable and 100 is the default.

## Context

Lists of offline tag drafts are loaded in one request, and beyond a few hundred the screen became slow.

## Source

> feat(mobile): limit offline tag drafts per device (MOB-129)

Source: Mobile app decision log (apps/mobile) - MOB-129
