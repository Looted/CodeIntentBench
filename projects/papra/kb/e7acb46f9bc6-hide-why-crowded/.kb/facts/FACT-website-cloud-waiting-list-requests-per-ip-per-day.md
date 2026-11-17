---
title: website.cloud_waiting_list requests_per_ip_per_day = 20
status: active
fact_kind: property_value
subject_key: website.cloud_waiting_list
property_key: requests_per_ip_per_day
operator: eq
value_type: int
value_int: 20
claim_key: CLAIM-7DD46EF9E0875C88
claim_text: At most 20 requests per IP address per day are accepted in the cloud waiting list
text_ref: REQ-website-cloud-waiting-list-rate-limit
tags:
  - lane:strict
  - knowledge-source:website-decisions
origin:
  kind: agent
  ref: 'Marketing website decision log (apps/website): WEB-367'
  recorded_at: '2026-02-15T15:05:18.000Z'
id: FACT-website-cloud-waiting-list-requests-per-ip-per-day
type: fact
---
At most 20 requests per IP address per day are accepted in the cloud waiting list.

Modeled from REQ-website-cloud-waiting-list-rate-limit so the claim can be checked for contradictions.
