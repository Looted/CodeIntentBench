---
title: middlewares.register_error_middleware when_a_custom_error_is_marked_as_internal = True
status: active
fact_kind: property_value
subject_key: middlewares.register_error_middleware
property_key: when_a_custom_error_is_marked_as_internal
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-6C86C01B42A140B4
claim_text: When a custom error is marked as internal, a 500 error is returned with a generic message
text_ref: REQ-papra-middlewares-custom-error-is-marked-as-internal-500
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-548'
  recorded_at: '2026-08-13T15:59:17.000Z'
id: FACT-papra-middlewares-register-error-middleware-when-a-custom-error-is-marked-as-internal
type: fact
---
When a custom error is marked as internal, a 500 error is returned with a generic message.

Modeled from REQ-papra-middlewares-custom-error-is-marked-as-internal-500 so the claim can be checked for contradictions.
