---
title: Pinned organization names in the mobile app are unique per device, regardless of letter case.
status: active
semantic_text: Pinned organization names in the mobile app are unique per device, regardless of letter case.
semantic_clauses:
  - Pinned organization names in the mobile app are unique per device, regardless of letter case
logic_claims:
  - CLAIM-92B4BDC5083CC592
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 44ac431e0deb538534513535b0c9bab7294742d6c34a716b5eb31ab2efc1a90d
semantic_inventory:
  - claim_key: CLAIM-92B4BDC5083CC592
    claim_text: Pinned organization names in the mobile app are unique per device, regardless of letter case
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 92
    subjects:
      - mobile.pinned_organizations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-389'
  recorded_at: '2026-01-21T16:35:46.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
rationale: Names are chosen by different people who cannot know what others picked.
id: REQ-mobile-pinned-organizations-name-uniqueness
type: req
---
Pinned organization names in the mobile app are unique per device, regardless of letter case.

## Context

Names are chosen by different people who cannot know what others picked.

## Source

> feat(mobile): pinned organization name uniqueness (MOB-389)

Source: Mobile app decision log (apps/mobile) - MOB-389
