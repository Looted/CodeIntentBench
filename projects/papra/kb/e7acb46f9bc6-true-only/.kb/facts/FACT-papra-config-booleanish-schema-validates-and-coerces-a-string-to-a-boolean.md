---
title: config.booleanish_schema validates_and_coerces_a_string_to_a_boolean = True
status: active
fact_kind: property_value
subject_key: config.booleanish_schema
property_key: validates_and_coerces_a_string_to_a_boolean
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-E49E2222C91701BC
claim_text: Validates and coerces a string to a boolean, used in the config where we accept env variables or js values
text_ref: REQ-papra-config-validates-and-coerces-string-to-boolean-used
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-595'
  recorded_at: '2026-07-08T11:25:16.000Z'
id: FACT-papra-config-booleanish-schema-validates-and-coerces-a-string-to-a-boolean
type: fact
---
Validates and coerces a string to a boolean, used in the config where we accept env variables or js values.

Modeled from REQ-papra-config-validates-and-coerces-string-to-boolean-used so the claim can be checked for contradictions.
