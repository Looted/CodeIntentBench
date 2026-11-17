---
title: mobile.signed_in_accounts limit_override = none
status: active
fact_kind: property_value
subject_key: mobile.signed_in_accounts
property_key: limit_override
operator: eq
value_type: string
value_string: none
claim_key: CLAIM-26540C22B00C0D45
claim_text: The signed-in account limit in the mobile app cannot be changed for an individual device
text_ref: REQ-mobile-signed-in-accounts-limit-override
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-345'
  recorded_at: '2025-07-24T14:07:24.000Z'
id: FACT-mobile-signed-in-accounts-limit-override
type: fact
---
The signed-in account limit in the mobile app cannot be changed for an individual device.

Modeled from REQ-mobile-signed-in-accounts-limit-override so the claim can be checked for contradictions.
