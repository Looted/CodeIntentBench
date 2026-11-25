---
title: license.license_trial_requests requests_per_ip_per_hour = 20
status: active
fact_kind: property_value
subject_key: license.license_trial_requests
property_key: requests_per_ip_per_hour
operator: eq
value_type: int
value_int: 20
claim_key: CLAIM-BA3ADB47805C9711
claim_text: At most 20 requests per IP address per hour are accepted in license trial requests
text_ref: REQ-license-license-trial-requests-rate-limit
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-178'
  recorded_at: '2026-08-17T09:31:31.000Z'
id: FACT-license-license-trial-requests-requests-per-ip-per-hour
type: fact
---
At most 20 requests per IP address per hour are accepted in license trial requests.

Modeled from REQ-license-license-trial-requests-rate-limit so the claim can be checked for contradictions.
