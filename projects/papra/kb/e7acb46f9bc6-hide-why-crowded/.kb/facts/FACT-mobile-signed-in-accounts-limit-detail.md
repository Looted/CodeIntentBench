---
title: mobile.signed_in_accounts limit_detail = signed-in accounts shared with them do not count
status: active
fact_kind: property_value
subject_key: mobile.signed_in_accounts
property_key: limit_detail
operator: eq
value_type: string
value_string: signed-in accounts shared with them do not count
claim_key: CLAIM-8D2ADDEE8BD5D795
claim_text: signed-in accounts shared with them do not count
text_ref: REQ-mobile-signed-in-accounts-what-counts
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-344'
  recorded_at: '2025-02-22T15:09:22.000Z'
id: FACT-mobile-signed-in-accounts-limit-detail
type: fact
---
Signed-in accounts shared with them do not count.

Modeled from REQ-mobile-signed-in-accounts-what-counts so the claim can be checked for contradictions.
