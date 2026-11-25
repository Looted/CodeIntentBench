---
title: mobile.pinned_organizations restore_window_days = 60
status: active
fact_kind: property_value
subject_key: mobile.pinned_organizations
property_key: restore_window_days
operator: eq
value_type: int
value_int: 60
claim_key: CLAIM-906223A87C9C2CFA
claim_text: A deleted pinned organization in the mobile app can be restored for 60 days
text_ref: REQ-mobile-pinned-organizations-deletion-grace
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-263'
  recorded_at: '2025-10-03T16:35:25.000Z'
id: FACT-mobile-pinned-organizations-restore-window-days
type: fact
---
A deleted pinned organization in the mobile app can be restored for 60 days.

Modeled from REQ-mobile-pinned-organizations-deletion-grace so the claim can be checked for contradictions.
