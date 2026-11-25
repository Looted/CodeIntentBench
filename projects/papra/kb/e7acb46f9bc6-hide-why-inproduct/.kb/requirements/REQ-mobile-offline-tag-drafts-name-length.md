---
title: Offline tag draft names in the mobile app are limited to 64 characters.
status: active
semantic_text: Offline tag draft names in the mobile app are limited to 64 characters.
semantic_clauses:
  - Offline tag draft names in the mobile app are limited to 64 characters
logic_claims:
  - CLAIM-1E4B29B88B85168D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b2bb27a25989ddc5f677094f257a144b9e50c0fbdfdce3c7b728d517235f907d
semantic_inventory:
  - claim_key: CLAIM-1E4B29B88B85168D
    claim_text: Offline tag draft names in the mobile app are limited to 64 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 70
    subjects:
      - mobile.offline_tag_drafts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-131'
  recorded_at: '2025-05-23T14:26:11.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
rationale: The column that stores the name is 64 characters wide.
id: REQ-mobile-offline-tag-drafts-name-length
type: req
---
Offline tag draft names in the mobile app are limited to 64 characters.

## Context

The column that stores the name is 64 characters wide.

## Source

> feat(mobile): cap offline tag draft name length at 64 (MOB-131)

Source: Mobile app decision log (apps/mobile) - MOB-131
