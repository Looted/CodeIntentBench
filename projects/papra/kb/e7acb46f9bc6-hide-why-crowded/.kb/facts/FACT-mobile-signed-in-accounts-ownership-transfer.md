---
title: mobile.signed_in_accounts ownership_transfer = staff only
status: active
fact_kind: property_value
subject_key: mobile.signed_in_accounts
property_key: ownership_transfer
operator: eq
value_type: string
value_string: staff only
claim_key: CLAIM-51D311ED0F463480
claim_text: Ownership of a signed-in account in the mobile app can be transferred only by staff
text_ref: REQ-mobile-signed-in-accounts-ownership-transfer
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-366'
  recorded_at: '2026-02-03T10:41:10.000Z'
id: FACT-mobile-signed-in-accounts-ownership-transfer
type: fact
---
Ownership of a signed-in account in the mobile app can be transferred only by staff.

Modeled from REQ-mobile-signed-in-accounts-ownership-transfer so the claim can be checked for contradictions.
