---
title: support.support_account_creation requests_per_ip_per_hour = 5
status: active
fact_kind: property_value
subject_key: support.support_account_creation
property_key: requests_per_ip_per_hour
operator: eq
value_type: int
value_int: 5
claim_key: CLAIM-F0C9E0F6BC7BAC09
claim_text: At most 5 requests per IP address per hour are accepted in support portal account creation
text_ref: REQ-support-support-account-creation-rate-limit
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-278'
  recorded_at: '2026-02-12T11:29:08.000Z'
id: FACT-support-support-account-creation-requests-per-ip-per-hour
type: fact
---
At most 5 requests per IP address per hour are accepted in support portal account creation.

Modeled from REQ-support-support-account-creation-rate-limit so the claim can be checked for contradictions.
