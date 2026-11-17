---
title: mobile.signed_in_accounts name_max_length = 80
status: active
fact_kind: property_value
subject_key: mobile.signed_in_accounts
property_key: name_max_length
operator: eq
value_type: int
value_int: 80
claim_key: CLAIM-983D88B12A9E2798
claim_text: Signed-in account names in the mobile app are between 3 and 80 characters long
text_ref: REQ-mobile-signed-in-accounts-name-length
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-353'
  recorded_at: '2025-12-17T17:13:32.000Z'
id: FACT-mobile-signed-in-accounts-name-max-length
type: fact
---
Signed-in account names in the mobile app are between 3 and 80 characters long.

Modeled from REQ-mobile-signed-in-accounts-name-length so the claim can be checked for contradictions.
