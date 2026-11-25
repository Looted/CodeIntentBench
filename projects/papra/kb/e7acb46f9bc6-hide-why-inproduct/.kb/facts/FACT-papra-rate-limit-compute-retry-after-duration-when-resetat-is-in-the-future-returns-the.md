---
title: rate_limit.compute_retry_after_duration when_resetat_is_in_the_future_returns_the = True
status: active
fact_kind: property_value
subject_key: rate_limit.compute_retry_after_duration
property_key: when_resetat_is_in_the_future_returns_the
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-1B01DF2035DA27A4
claim_text: When resetAt is in the future, returns the duration until resetAt in seconds
text_ref: REQ-papra-rate-limit-resetat-is-in-future-returns-duration-until
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-560'
  recorded_at: '2026-04-26T13:02:18.000Z'
id: FACT-papra-rate-limit-compute-retry-after-duration-when-resetat-is-in-the-future-returns-the
type: fact
---
When resetAt is in the future, returns the duration until resetAt in seconds.

Modeled from REQ-papra-rate-limit-resetat-is-in-future-returns-duration-until so the claim can be checked for contradictions.
