---
title: custom_properties.delete_response status_code = 204
status: active
fact_kind: property_value
subject_key: custom_properties.delete_response
property_key: status_code
operator: eq
value_type: int
value_int: 204
claim_key: CLAIM-C746CA13D3969F51
claim_text: Deleting a custom property definition returns 204 with no body
text_ref: REQ-papra-custom-property-delete-returns-204
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.5.0 changelog, #1141: Custom property definition deletion endpoint (`DELETE /api/o'
  recorded_at: '2026-11-16T10:36:30.418Z'
id: FACT-papra-custom-properties-delete-response-status-code
type: fact
---
Deleting a custom property definition returns 204 with no body.

Modeled from REQ-papra-custom-property-delete-returns-204 so the claim can be checked for contradictions.
