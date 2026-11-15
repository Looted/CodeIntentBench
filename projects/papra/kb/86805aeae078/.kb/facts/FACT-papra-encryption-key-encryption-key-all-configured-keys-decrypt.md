---
title: encryption.key_encryption_key all_configured_keys_decrypt = True
status: active
fact_kind: property_value
subject_key: encryption.key_encryption_key
property_key: all_configured_keys_decrypt
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-2C3C2960AABB48F8
claim_text: every configured key can still decrypt existing documents
text_ref: REQ-when-several-versioned-key-encryption-keys-2FAB9215
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra documentation site (apps/docs): 03-guides/05-setup-document-encryption.mdx#key-versions'
  recorded_at: '2026-11-15T21:51:35.624Z'
id: FACT-papra-encryption-key-encryption-key-all-configured-keys-decrypt
type: fact
---
Every configured key can still decrypt existing documents.

Modeled from REQ-when-several-versioned-key-encryption-keys-2FAB9215 so the claim can be checked for contradictions.
