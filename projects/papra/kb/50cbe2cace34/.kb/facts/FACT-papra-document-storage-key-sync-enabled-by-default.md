---
title: document.storage_key_sync enabled_by_default = False
status: active
fact_kind: property_value
subject_key: document.storage_key_sync
property_key: enabled_by_default
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-3C97454B5F2F5AAB
claim_text: Storage key synchronization is optional and off by default (DOCUMENT_STORAGE_KEY_SYNC_ENABLED, with pattern-based storage keys)
text_ref: REQ-papra-storage-key-sync-on-document-update
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra merged pull requests: #1525'
  recorded_at: '2026-11-15T23:00:03.144Z'
id: FACT-papra-document-storage-key-sync-enabled-by-default
type: fact
---
Storage key synchronization is optional and off by default (DOCUMENT_STORAGE_KEY_SYNC_ENABLED, with pattern-based storage keys).

Modeled from REQ-papra-storage-key-sync-on-document-update so the claim can be checked for contradictions.
