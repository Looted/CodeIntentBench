---
title: config.boolean_env invalid_value_reads_false = False
status: active
fact_kind: property_value
subject_key: config.boolean_env
property_key: invalid_value_reads_false
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-CD0F791252F879AF
claim_text: A boolean environment variable with a value that is not boolean-ish fails validation instead of reading as false
text_ref: REQ-papra-stricter-boolean-env
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.4.0 changelog, #984: App environment configuration validation is now a bit strict'
  recorded_at: '2026-11-16T10:24:04.335Z'
id: FACT-papra-config-boolean-env-invalid-value-reads-false
type: fact
---
A boolean environment variable with a value that is not boolean-ish fails validation instead of reading as false.

Modeled from REQ-papra-stricter-boolean-env so the claim can be checked for contradictions.
