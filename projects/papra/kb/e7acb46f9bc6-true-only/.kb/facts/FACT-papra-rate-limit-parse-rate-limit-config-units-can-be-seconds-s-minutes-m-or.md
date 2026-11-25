---
title: rate_limit.parse_rate_limit_config units_can_be_seconds_s_minutes_m_or = True
status: active
fact_kind: property_value
subject_key: rate_limit.parse_rate_limit_config
property_key: units_can_be_seconds_s_minutes_m_or
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-3E1075C4A44C1004
claim_text: Units can be seconds (s), minutes (m) or hours (h)
text_ref: REQ-papra-rate-limit-units-can-be-seconds-s-minutes-m
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-556'
  recorded_at: '2025-03-03T10:33:15.000Z'
id: FACT-papra-rate-limit-parse-rate-limit-config-units-can-be-seconds-s-minutes-m-or
type: fact
---
Units can be seconds (s), minutes (m) or hours (h).

Modeled from REQ-papra-rate-limit-units-can-be-seconds-s-minutes-m so the claim can be checked for contradictions.
