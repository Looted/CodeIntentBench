---
title: mobile.beta_programme_sign_up requests_per_ip_per_day = 10
status: active
fact_kind: property_value
subject_key: mobile.beta_programme_sign_up
property_key: requests_per_ip_per_day
operator: eq
value_type: int
value_int: 10
claim_key: CLAIM-43974563FC43E510
claim_text: At most 10 requests per IP address per day are accepted in the mobile beta programme sign-up
text_ref: REQ-mobile-beta-programme-sign-up-rate-limit
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-334'
  recorded_at: '2026-06-13T15:05:04.000Z'
id: FACT-mobile-beta-programme-sign-up-requests-per-ip-per-day
type: fact
---
At most 10 requests per IP address per day are accepted in the mobile beta programme sign-up.

Modeled from REQ-mobile-beta-programme-sign-up-rate-limit so the claim can be checked for contradictions.
