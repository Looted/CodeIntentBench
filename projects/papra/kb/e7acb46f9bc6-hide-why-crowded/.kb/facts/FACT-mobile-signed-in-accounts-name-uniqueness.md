---
title: mobile.signed_in_accounts name_uniqueness = unique per owner
status: active
fact_kind: property_value
subject_key: mobile.signed_in_accounts
property_key: name_uniqueness
operator: eq
value_type: string
value_string: unique per owner
claim_key: CLAIM-F21B0F0D2BB3DA06
claim_text: Signed-in account names in the mobile app are unique per device, regardless of letter case
text_ref: REQ-mobile-signed-in-accounts-name-uniqueness
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-350'
  recorded_at: '2026-08-12T09:58:26.000Z'
id: FACT-mobile-signed-in-accounts-name-uniqueness
type: fact
---
Signed-in account names in the mobile app are unique per device, regardless of letter case.

Modeled from REQ-mobile-signed-in-accounts-name-uniqueness so the claim can be checked for contradictions.
