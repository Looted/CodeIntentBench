---
title: Ownership of a pinned organization in the mobile app can be transferred only by staff.
status: active
semantic_text: Ownership of a pinned organization in the mobile app can be transferred only by staff.
semantic_clauses:
  - Ownership of a pinned organization in the mobile app can be transferred only by staff
logic_claims:
  - CLAIM-F1DC9F8E3C546A17
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 24eef47b10428bcbfbf0b351f70f9604e14d21fff753469a0f0ddbf5b0516ef0
semantic_inventory:
  - claim_key: CLAIM-F1DC9F8E3C546A17
    claim_text: Ownership of a pinned organization in the mobile app can be transferred only by staff
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 85
    subjects:
      - mobile.pinned_organizations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-271'
  recorded_at: '2026-05-16T13:06:32.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
rationale: People leave, and what they owned has to go to someone.
id: REQ-mobile-pinned-organizations-ownership-transfer
type: req
---
Ownership of a pinned organization in the mobile app can be transferred only by staff.

## Context

People leave, and what they owned has to go to someone.

## Source

> feat(mobile): transferring a pinned organization (MOB-271)

Source: Mobile app decision log (apps/mobile) - MOB-271
