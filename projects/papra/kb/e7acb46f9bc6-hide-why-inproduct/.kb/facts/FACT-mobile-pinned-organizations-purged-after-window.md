---
title: mobile.pinned_organizations purged_after_window = True
status: active
fact_kind: property_value
subject_key: mobile.pinned_organizations
property_key: purged_after_window
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-7E91447BA9FA2D3B
claim_text: after that it is removed for good
text_ref: REQ-mobile-pinned-organizations-deletion-grace
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-263'
  recorded_at: '2025-10-03T16:35:25.000Z'
id: FACT-mobile-pinned-organizations-purged-after-window
type: fact
---
After that it is removed for good.

Modeled from REQ-mobile-pinned-organizations-deletion-grace so the claim can be checked for contradictions.
