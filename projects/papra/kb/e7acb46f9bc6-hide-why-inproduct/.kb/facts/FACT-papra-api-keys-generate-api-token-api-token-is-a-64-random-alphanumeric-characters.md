---
title: api_keys.generate_api_token api_token_is_a_64_random_alphanumeric_characters = True
status: active
fact_kind: property_value
subject_key: api_keys.generate_api_token
property_key: api_token_is_a_64_random_alphanumeric_characters
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-2252431FD9A5C0A3
claim_text: Api token is a 64 random alphanumeric characters string prefixed with "ppapi_"
text_ref: REQ-papra-api-keys-api-token-is-64-random-alphanumeric-characters
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-458'
  recorded_at: '2026-06-08T14:47:25.000Z'
id: FACT-papra-api-keys-generate-api-token-api-token-is-a-64-random-alphanumeric-characters
type: fact
---
Api token is a 64 random alphanumeric characters string prefixed with "ppapi_".

Modeled from REQ-papra-api-keys-api-token-is-64-random-alphanumeric-characters so the claim can be checked for contradictions.
