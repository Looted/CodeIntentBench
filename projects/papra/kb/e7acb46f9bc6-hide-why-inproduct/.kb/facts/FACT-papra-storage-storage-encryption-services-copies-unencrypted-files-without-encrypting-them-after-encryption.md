---
title: storage.storage_encryption_services copies_unencrypted_files_without_encrypting_them_after_encryption = True
status: active
fact_kind: property_value
subject_key: storage.storage_encryption_services
property_key: copies_unencrypted_files_without_encrypting_them_after_encryption
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-713BB5FA6BD8CC32
claim_text: Copies unencrypted files without encrypting them after encryption is enabled
text_ref: REQ-papra-storage-copies-unencrypted-files-without-encrypting-them-after
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1752'
  recorded_at: '2026-01-09T11:45:33.000Z'
id: FACT-papra-storage-storage-encryption-services-copies-unencrypted-files-without-encrypting-them-after-encryption
type: fact
---
Copies unencrypted files without encrypting them after encryption is enabled.

Modeled from REQ-papra-storage-copies-unencrypted-files-without-encrypting-them-after so the claim can be checked for contradictions.
