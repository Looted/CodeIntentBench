---
title: education.education_discount_requests requests_per_ip_per_day = 20
status: active
fact_kind: property_value
subject_key: education.education_discount_requests
property_key: requests_per_ip_per_day
operator: eq
value_type: int
value_int: 20
claim_key: CLAIM-6D3D44FFD43090E9
claim_text: At most 20 requests per IP address per day are accepted in education discount requests
text_ref: REQ-education-education-discount-requests-rate-limit
tags:
  - lane:strict
  - knowledge-source:education-decisions
origin:
  kind: agent
  ref: 'Education programme portal notes: EDU-199'
  recorded_at: '2025-12-22T15:51:50.000Z'
id: FACT-education-education-discount-requests-requests-per-ip-per-day
type: fact
---
At most 20 requests per IP address per day are accepted in education discount requests.

Modeled from REQ-education-education-discount-requests-rate-limit so the claim can be checked for contradictions.
