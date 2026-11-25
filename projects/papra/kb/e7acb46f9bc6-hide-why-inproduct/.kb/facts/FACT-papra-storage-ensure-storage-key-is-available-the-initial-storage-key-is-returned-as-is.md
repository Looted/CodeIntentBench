---
title: storage.ensure_storage_key_is_available the_initial_storage_key_is_returned_as_is = True
status: active
fact_kind: property_value
subject_key: storage.ensure_storage_key_is_available
property_key: the_initial_storage_key_is_returned_as_is
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-92707C992A0D6E77
claim_text: The initial storage key is returned as is if it is available, but an error is thrown if it is taken and random suffix fallback is disabled
text_ref: REQ-papra-storage-initial-storage-key-is-returned-as-is
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1764'
  recorded_at: '2026-09-07T12:00:02.000Z'
id: FACT-papra-storage-ensure-storage-key-is-available-the-initial-storage-key-is-returned-as-is
type: fact
---
The initial storage key is returned as is if it is available, but an error is thrown if it is taken and random suffix fallback is disabled.

Modeled from REQ-papra-storage-initial-storage-key-is-returned-as-is so the claim can be checked for contradictions.
