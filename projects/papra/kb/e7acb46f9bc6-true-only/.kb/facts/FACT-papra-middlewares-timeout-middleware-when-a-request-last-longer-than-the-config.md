---
title: middlewares.timeout_middleware when_a_request_last_longer_than_the_config = True
status: active
fact_kind: property_value
subject_key: middlewares.timeout_middleware
property_key: when_a_request_last_longer_than_the_config
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-F37301C0BECB2AE9
claim_text: When a request last longer than the config timeout, a 504 error is raised
text_ref: REQ-papra-middlewares-request-last-longer-than-config-timeout-504
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-550'
  recorded_at: '2025-08-28T14:55:43.000Z'
id: FACT-papra-middlewares-timeout-middleware-when-a-request-last-longer-than-the-config
type: fact
---
When a request last longer than the config timeout, a 504 error is raised.

Modeled from REQ-papra-middlewares-request-last-longer-than-config-timeout-504 so the claim can be checked for contradictions.
