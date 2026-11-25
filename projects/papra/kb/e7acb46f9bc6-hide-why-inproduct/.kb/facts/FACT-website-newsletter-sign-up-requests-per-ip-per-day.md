---
title: website.newsletter_sign_up requests_per_ip_per_day = 20
status: active
fact_kind: property_value
subject_key: website.newsletter_sign_up
property_key: requests_per_ip_per_day
operator: eq
value_type: int
value_int: 20
claim_key: CLAIM-F9DDDE2944431DEC
claim_text: At most 20 requests per IP address per day are accepted in the newsletter sign-up form
text_ref: REQ-website-newsletter-sign-up-rate-limit
tags:
  - lane:strict
  - knowledge-source:website-decisions
origin:
  kind: agent
  ref: 'Marketing website decision log (apps/website): WEB-251'
  recorded_at: '2026-05-22T09:02:58.000Z'
id: FACT-website-newsletter-sign-up-requests-per-ip-per-day
type: fact
---
At most 20 requests per IP address per day are accepted in the newsletter sign-up form.

Modeled from REQ-website-newsletter-sign-up-rate-limit so the claim can be checked for contradictions.
