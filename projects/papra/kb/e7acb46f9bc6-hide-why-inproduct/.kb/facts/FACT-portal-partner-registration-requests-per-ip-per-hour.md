---
title: portal.partner_registration requests_per_ip_per_hour = 3
status: active
fact_kind: property_value
subject_key: portal.partner_registration
property_key: requests_per_ip_per_hour
operator: eq
value_type: int
value_int: 3
claim_key: CLAIM-3FF2B3632BAA33FA
claim_text: At most 3 requests per IP address per hour are accepted in partner portal registration
text_ref: REQ-portal-partner-registration-rate-limit
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-201'
  recorded_at: '2025-09-06T10:12:10.000Z'
id: FACT-portal-partner-registration-requests-per-ip-per-hour
type: fact
---
At most 3 requests per IP address per hour are accepted in partner portal registration.

Modeled from REQ-portal-partner-registration-rate-limit so the claim can be checked for contradictions.
