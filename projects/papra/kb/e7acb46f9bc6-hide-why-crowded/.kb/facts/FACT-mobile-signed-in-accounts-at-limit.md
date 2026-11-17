---
title: mobile.signed_in_accounts at_limit = refused, limit named
status: active
fact_kind: property_value
subject_key: mobile.signed_in_accounts
property_key: at_limit
operator: eq
value_type: string
value_string: refused, limit named
claim_key: CLAIM-57979288FF3C8475
claim_text: Creating a signed-in account in the mobile app when the device is at the limit is refused with an error that names the limit
text_ref: REQ-mobile-signed-in-accounts-at-the-limit
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-347'
  recorded_at: '2026-03-20T15:51:22.000Z'
id: FACT-mobile-signed-in-accounts-at-limit
type: fact
---
Creating a signed-in account in the mobile app when the device is at the limit is refused with an error that names the limit.

Modeled from REQ-mobile-signed-in-accounts-at-the-limit so the claim can be checked for contradictions.
