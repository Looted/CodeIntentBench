---
title: rate_limit.parse_rate_limit_config parses_rate_limit_config_like_10_2h_2 = True
status: active
fact_kind: property_value
subject_key: rate_limit.parse_rate_limit_config
property_key: parses_rate_limit_config_like_10_2h_2
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-5C0FE07505686C3C
claim_text: Parses rate limit config, like "10/2h", "2/5m", into a maxHits and window in Temporal.Duration
text_ref: REQ-papra-rate-limit-parses-rate-limit-config-like-10-2h
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-552'
  recorded_at: '2025-09-06T14:18:15.000Z'
id: FACT-papra-rate-limit-parse-rate-limit-config-parses-rate-limit-config-like-10-2h-2
type: fact
---
Parses rate limit config, like "10/2h", "2/5m", into a maxHits and window in Temporal.Duration.

Modeled from REQ-papra-rate-limit-parses-rate-limit-config-like-10-2h so the claim can be checked for contradictions.
