---
title: mobile.signed_in_accounts counted_toward_limit = owned only
status: active
fact_kind: property_value
subject_key: mobile.signed_in_accounts
property_key: counted_toward_limit
operator: eq
value_type: string
value_string: owned only
claim_key: CLAIM-B67E564BEB25BE7A
claim_text: Only signed-in accounts the device owns count toward the limit in the mobile app
text_ref: REQ-mobile-signed-in-accounts-what-counts
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-344'
  recorded_at: '2025-02-22T15:09:22.000Z'
id: FACT-mobile-signed-in-accounts-counted-toward-limit
type: fact
---
Only signed-in accounts the device owns count toward the limit in the mobile app.

Modeled from REQ-mobile-signed-in-accounts-what-counts so the claim can be checked for contradictions.
