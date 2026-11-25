---
title: storage.ensure_storage_key_is_available when_a_given_storage_key_is_not_already = True
status: active
fact_kind: property_value
subject_key: storage.ensure_storage_key_is_available
property_key: when_a_given_storage_key_is_not_already
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-AD76B83A73D79EDA
claim_text: When a given storage key is not already taken, the storage key is returned as is
text_ref: REQ-papra-storage-given-storage-key-is-not-already-taken
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1765'
  recorded_at: '2025-07-25T15:27:38.000Z'
id: FACT-papra-storage-ensure-storage-key-is-available-when-a-given-storage-key-is-not-already
type: fact
---
When a given storage key is not already taken, the storage key is returned as is.

Modeled from REQ-papra-storage-given-storage-key-is-not-already-taken so the claim can be checked for contradictions.
