---
title: backoffice.staff_sign_in requests_per_ip_per_hour = 20
status: active
fact_kind: property_value
subject_key: backoffice.staff_sign_in
property_key: requests_per_ip_per_hour
operator: eq
value_type: int
value_int: 20
claim_key: CLAIM-27A89073A2FDC617
claim_text: At most 20 requests per IP address per hour are accepted in back office staff sign-in
text_ref: REQ-backoffice-staff-sign-in-rate-limit
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-220'
  recorded_at: '2025-05-13T08:28:05.000Z'
id: FACT-backoffice-staff-sign-in-requests-per-ip-per-hour
type: fact
---
At most 20 requests per IP address per hour are accepted in back office staff sign-in.

Modeled from REQ-backoffice-staff-sign-in-rate-limit so the claim can be checked for contradictions.
