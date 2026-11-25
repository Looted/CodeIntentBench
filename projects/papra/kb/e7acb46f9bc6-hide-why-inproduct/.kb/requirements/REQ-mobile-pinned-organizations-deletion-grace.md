---
title: A deleted pinned organization in the mobile app can be restored for 60 days; after that it is removed for good.
status: active
semantic_text: A deleted pinned organization in the mobile app can be restored for 60 days; after that it is removed for good.
semantic_clauses:
  - A deleted pinned organization in the mobile app can be restored for 60 days
  - after that it is removed for good
logic_claims:
  - CLAIM-906223A87C9C2CFA
  - CLAIM-7E91447BA9FA2D3B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3e728ac906b3ec36222ef7f5f6f6f542e2bfdf30ab76e6639e8fc0e799fda0e8
semantic_inventory:
  - claim_key: CLAIM-906223A87C9C2CFA
    claim_text: A deleted pinned organization in the mobile app can be restored for 60 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 75
    subjects:
      - mobile.pinned_organizations
  - claim_key: CLAIM-7E91447BA9FA2D3B
    claim_text: after that it is removed for good
    role: descriptive
    status: modeled
    span:
      start: 77
      end: 110
    subjects:
      - mobile.pinned_organizations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-263'
  recorded_at: '2025-10-03T16:35:25.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
rationale: Most deletions that were regretted were noticed within a week or two.
id: REQ-mobile-pinned-organizations-deletion-grace
type: req
---
A deleted pinned organization in the mobile app can be restored for 60 days; after that it is removed for good.

## Context

Most deletions that were regretted were noticed within a week or two.

## Source

> feat(mobile): 60-day restore window for pinned organizations (MOB-263)

Source: Mobile app decision log (apps/mobile) - MOB-263
