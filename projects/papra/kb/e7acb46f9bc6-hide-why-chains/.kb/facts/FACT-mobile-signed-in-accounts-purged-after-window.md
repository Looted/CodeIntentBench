---
title: mobile.signed_in_accounts purged_after_window = True
status: active
fact_kind: property_value
subject_key: mobile.signed_in_accounts
property_key: purged_after_window
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-7E91447BA9FA2D3B
claim_text: after that it is removed for good
text_ref: REQ-mobile-signed-in-accounts-deletion-grace
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-358'
  recorded_at: '2025-02-26T10:57:03.000Z'
id: FACT-mobile-signed-in-accounts-purged-after-window
type: fact
---
After that it is removed for good.

Modeled from REQ-mobile-signed-in-accounts-deletion-grace so the claim can be checked for contradictions.
