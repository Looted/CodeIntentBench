---
title: mobile.signed_in_accounts maximum_count = 50
status: active
fact_kind: property_value
subject_key: mobile.signed_in_accounts
property_key: maximum_count
operator: eq
value_type: int
value_int: 50
claim_key: CLAIM-59699E15239F6F56
claim_text: A device can have at most 50 signed-in accounts in the mobile app
text_ref: REQ-mobile-signed-in-accounts-maximum-count
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-342'
  recorded_at: '2025-05-06T15:51:39.000Z'
id: FACT-mobile-signed-in-accounts-maximum-count
type: fact
---
A device can have at most 50 signed-in accounts in the mobile app.

Modeled from REQ-mobile-signed-in-accounts-maximum-count so the claim can be checked for contradictions.
