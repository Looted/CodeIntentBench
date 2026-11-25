---
title: rate_limit.compute_retry_after_duration when_resetat_is_in_the_past_returns_a = True
status: active
fact_kind: property_value
subject_key: rate_limit.compute_retry_after_duration
property_key: when_resetat_is_in_the_past_returns_a
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-92C3D4E99372B9CB
claim_text: When resetAt is in the past, returns a duration of 0
text_ref: REQ-papra-rate-limit-resetat-is-in-past-returns-duration-of
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-562'
  recorded_at: '2026-03-23T12:39:26.000Z'
id: FACT-papra-rate-limit-compute-retry-after-duration-when-resetat-is-in-the-past-returns-a
type: fact
---
When resetAt is in the past, returns a duration of 0.

Modeled from REQ-papra-rate-limit-resetat-is-in-past-returns-duration-of so the claim can be checked for contradictions.
