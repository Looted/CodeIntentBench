---
title: website.webinar_registration requests_per_ip_per_day = 20
status: active
fact_kind: property_value
subject_key: website.webinar_registration
property_key: requests_per_ip_per_day
operator: eq
value_type: int
value_int: 20
claim_key: CLAIM-BB86D915C58CE540
claim_text: At most 20 requests per IP address per day are accepted in webinar registration
text_ref: REQ-website-webinar-registration-rate-limit
tags:
  - lane:strict
  - knowledge-source:website-decisions
origin:
  kind: agent
  ref: 'Marketing website decision log (apps/website): WEB-393'
  recorded_at: '2026-01-19T13:53:13.000Z'
id: FACT-website-webinar-registration-requests-per-ip-per-day
type: fact
---
At most 20 requests per IP address per day are accepted in webinar registration.

Modeled from REQ-website-webinar-registration-rate-limit so the claim can be checked for contradictions.
