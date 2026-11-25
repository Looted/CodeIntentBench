---
title: storage.storage_encryption_services copies_identical_ciphertext_and_decrypts_with_the_source = True
status: active
fact_kind: property_value
subject_key: storage.storage_encryption_services
property_key: copies_identical_ciphertext_and_decrypts_with_the_source
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-95848225651A3CDA
claim_text: Copies identical ciphertext and decrypts with the source context after key rotation
text_ref: REQ-papra-storage-copies-identical-ciphertext-and-decrypts-with-source
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1749'
  recorded_at: '2025-08-16T14:11:20.000Z'
id: FACT-papra-storage-storage-encryption-services-copies-identical-ciphertext-and-decrypts-with-the-source
type: fact
---
Copies identical ciphertext and decrypts with the source context after key rotation.

Modeled from REQ-papra-storage-copies-identical-ciphertext-and-decrypts-with-source so the claim can be checked for contradictions.
