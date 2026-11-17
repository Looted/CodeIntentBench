---
title: mobile.signed_in_accounts limit_configurable = True
status: active
fact_kind: property_value
subject_key: mobile.signed_in_accounts
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-441789201020C56C
claim_text: the limit is configured per deployment and 50 is the default
text_ref: REQ-mobile-signed-in-accounts-maximum-count
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-342'
  recorded_at: '2025-05-06T15:51:39.000Z'
id: FACT-mobile-signed-in-accounts-limit-configurable
type: fact
---
The limit is configured per deployment and 50 is the default.

Modeled from REQ-mobile-signed-in-accounts-maximum-count so the claim can be checked for contradictions.
