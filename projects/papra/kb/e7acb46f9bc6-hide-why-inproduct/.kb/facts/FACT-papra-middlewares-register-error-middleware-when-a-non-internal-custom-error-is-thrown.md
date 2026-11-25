---
title: middlewares.register_error_middleware when_a_non_internal_custom_error_is_thrown = True
status: active
fact_kind: property_value
subject_key: middlewares.register_error_middleware
property_key: when_a_non_internal_custom_error_is_thrown
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-ECDC59AFCE573E68
claim_text: When a non-internal custom error is thrown with a status code, the error is returned
text_ref: REQ-papra-middlewares-non-internal-custom-error-is-thrown-with
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-549'
  recorded_at: '2025-11-06T13:43:13.000Z'
id: FACT-papra-middlewares-register-error-middleware-when-a-non-internal-custom-error-is-thrown
type: fact
---
When a non-internal custom error is thrown with a status code, the error is returned.

Modeled from REQ-papra-middlewares-non-internal-custom-error-is-thrown-with so the claim can be checked for contradictions.
