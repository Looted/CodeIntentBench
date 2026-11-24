---
title: Offline tag drafts in the mobile app are unique per device regardless of letter case; a duplicate is reported as offline-tag-draft-already-exists.
status: active
semantic_text: Offline tag drafts in the mobile app are unique per device regardless of letter case; a duplicate is reported as offline-tag-draft-already-exists.
semantic_clauses:
  - Offline tag drafts in the mobile app are unique per device regardless of letter case
  - a duplicate is reported as offline-tag-draft-already-exists
logic_claims:
  - CLAIM-264AC07AF53AB76A
  - CLAIM-5D2F0AE6EA70151D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 6bdfaafb6d41e129840600cd696969e6a1ab3785c11712fdc1061c3f578be77a
semantic_inventory:
  - claim_key: CLAIM-264AC07AF53AB76A
    claim_text: Offline tag drafts in the mobile app are unique per device regardless of letter case
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 84
    subjects:
      - mobile.offline_tag_drafts
  - claim_key: CLAIM-5D2F0AE6EA70151D
    claim_text: a duplicate is reported as offline-tag-draft-already-exists
    role: descriptive
    status: modeled
    span:
      start: 86
      end: 145
    subjects:
      - mobile.offline_tag_drafts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-179'
  recorded_at: '2026-09-19T09:42:04.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
id: REQ-mobile-offline-tag-drafts-unique-ignoring-case
type: req
---
Offline tag drafts in the mobile app are unique per device regardless of letter case; a duplicate is reported as offline-tag-draft-already-exists.

## Context

Reason not stated.

## Source

> feat(mobile): case-insensitive unique offline tag draft names (MOB-179)

Source: Mobile app decision log (apps/mobile) - MOB-179
