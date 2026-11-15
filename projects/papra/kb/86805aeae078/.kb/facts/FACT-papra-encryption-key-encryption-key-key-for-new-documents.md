---
title: encryption.key_encryption_key key_for_new_documents = highest_version
status: active
fact_kind: property_value
subject_key: encryption.key_encryption_key
property_key: key_for_new_documents
operator: eq
value_type: string
value_string: highest_version
claim_key: CLAIM-71F96BD843A3D6E9
claim_text: When several versioned key encryption keys are configured, the highest version encrypts new documents
text_ref: REQ-when-several-versioned-key-encryption-keys-2FAB9215
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra documentation site (apps/docs): 03-guides/05-setup-document-encryption.mdx#key-versions'
  recorded_at: '2026-11-15T21:51:35.116Z'
id: FACT-papra-encryption-key-encryption-key-key-for-new-documents
type: fact
---
When several versioned key encryption keys are configured, the highest version encrypts new documents.

Modeled from REQ-when-several-versioned-key-encryption-keys-2FAB9215 so the claim can be checked for contradictions.
