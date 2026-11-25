---
title: mobile.pinned_organizations name_uniqueness = unique per owner
status: active
fact_kind: property_value
subject_key: mobile.pinned_organizations
property_key: name_uniqueness
operator: eq
value_type: string
value_string: unique per owner
claim_key: CLAIM-92B4BDC5083CC592
claim_text: Pinned organization names in the mobile app are unique per device, regardless of letter case
text_ref: REQ-mobile-pinned-organizations-name-uniqueness
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-254'
  recorded_at: '2026-01-21T16:35:46.000Z'
id: FACT-mobile-pinned-organizations-name-uniqueness
type: fact
---
Pinned organization names in the mobile app are unique per device, regardless of letter case.

Modeled from REQ-mobile-pinned-organizations-name-uniqueness so the claim can be checked for contradictions.
