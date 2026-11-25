---
title: marketplace.author_registration requests_per_ip_per_day = 5
status: active
fact_kind: property_value
subject_key: marketplace.author_registration
property_key: requests_per_ip_per_day
operator: eq
value_type: int
value_int: 5
claim_key: CLAIM-D7A9DA7A16F06E58
claim_text: At most 5 requests per IP address per day are accepted in template author registration
text_ref: REQ-marketplace-author-registration-rate-limit
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-152'
  recorded_at: '2025-07-16T15:27:20.000Z'
id: FACT-marketplace-author-registration-requests-per-ip-per-day
type: fact
---
At most 5 requests per IP address per day are accepted in template author registration.

Modeled from REQ-marketplace-author-registration-rate-limit so the claim can be checked for contradictions.
