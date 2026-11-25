---
title: portal.sub_partner_accounts counted_toward_limit = owned only
status: active
fact_kind: property_value
subject_key: portal.sub_partner_accounts
property_key: counted_toward_limit
operator: eq
value_type: string
value_string: owned only
claim_key: CLAIM-2F7BAB64417E9425
claim_text: Only sub-partner accounts the partner owns count toward the limit in the partner portal
text_ref: REQ-portal-sub-partner-accounts-what-counts
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-241'
  recorded_at: '2025-12-10T14:13:43.000Z'
id: FACT-portal-sub-partner-accounts-counted-toward-limit
type: fact
---
Only sub-partner accounts the partner owns count toward the limit in the partner portal.

Modeled from REQ-portal-sub-partner-accounts-what-counts so the claim can be checked for contradictions.
