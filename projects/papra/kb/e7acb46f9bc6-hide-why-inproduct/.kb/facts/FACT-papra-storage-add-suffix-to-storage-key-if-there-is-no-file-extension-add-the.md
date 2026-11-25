---
title: storage.add_suffix_to_storage_key if_there_is_no_file_extension_add_the = True
status: active
fact_kind: property_value
subject_key: storage.add_suffix_to_storage_key
property_key: if_there_is_no_file_extension_add_the
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-0E73BB194AF741A6
claim_text: If there is no file extension, add the suffix at the end of the storage key
text_ref: REQ-papra-storage-there-is-no-file-extension-add-suffix
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1756'
  recorded_at: '2026-01-18T08:28:31.000Z'
id: FACT-papra-storage-add-suffix-to-storage-key-if-there-is-no-file-extension-add-the
type: fact
---
If there is no file extension, add the suffix at the end of the storage key.

Modeled from REQ-papra-storage-there-is-no-file-extension-add-suffix so the claim can be checked for contradictions.
