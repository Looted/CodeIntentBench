---
title: api_keys.api_key_e2e when_not_authenticated_at_all_requesting_the_api = True
status: active
fact_kind: property_value
subject_key: api_keys.api_key_e2e
property_key: when_not_authenticated_at_all_requesting_the_api
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-F30A8DD061995ADC
claim_text: When not authenticated at all, requesting the /api/api-keys/current route returns an error
text_ref: REQ-papra-api-keys-not-authenticated-at-all-requesting-api-api
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-471'
  recorded_at: '2025-05-05T14:06:13.000Z'
id: FACT-papra-api-keys-api-key-e2e-when-not-authenticated-at-all-requesting-the-api
type: fact
---
When not authenticated at all, requesting the /api/api-keys/current route returns an error.

Modeled from REQ-papra-api-keys-not-authenticated-at-all-requesting-api-api so the claim can be checked for contradictions.
