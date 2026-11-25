---
title: portal.referral_links limit_override = none
status: active
fact_kind: property_value
subject_key: portal.referral_links
property_key: limit_override
operator: eq
value_type: string
value_string: none
claim_key: CLAIM-797AE50054D77CAA
claim_text: The referral link limit in the partner portal cannot be changed for an individual partner
text_ref: REQ-portal-referral-links-limit-override
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-262'
  recorded_at: '2025-08-24T12:51:18.000Z'
id: FACT-portal-referral-links-limit-override
type: fact
---
The referral link limit in the partner portal cannot be changed for an individual partner.

Modeled from REQ-portal-referral-links-limit-override so the claim can be checked for contradictions.
