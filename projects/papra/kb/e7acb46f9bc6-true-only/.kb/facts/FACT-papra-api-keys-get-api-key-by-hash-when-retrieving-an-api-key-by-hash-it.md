---
title: api_keys.get_api_key_by_hash when_retrieving_an_api_key_by_hash_it = True
status: active
fact_kind: property_value
subject_key: api_keys.get_api_key_by_hash
property_key: when_retrieving_an_api_key_by_hash_it
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-E476C1C7B68D1AD0
claim_text: When retrieving an api key by hash, it only returns the api key if it is not expired
text_ref: REQ-papra-api-keys-retrieving-api-key-by-hash-it-only
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-455'
  recorded_at: '2026-08-27T11:47:03.000Z'
id: FACT-papra-api-keys-get-api-key-by-hash-when-retrieving-an-api-key-by-hash-it
type: fact
---
When retrieving an api key by hash, it only returns the api key if it is not expired.

Modeled from REQ-papra-api-keys-retrieving-api-key-by-hash-it-only so the claim can be checked for contradictions.
