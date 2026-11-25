---
title: document.storage_key_sync moves_existing_files_when_enabled = False
status: active
fact_kind: property_value
subject_key: document.storage_key_sync
property_key: moves_existing_files_when_enabled
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-5E75D4B18AC63A8D
claim_text: enabling it does not move existing files by itself
text_ref: REQ-papra-storage-key-sync-on-document-update
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra merged pull requests: #1525'
  recorded_at: '2026-11-16T10:17:48.413Z'
id: FACT-papra-document-storage-key-sync-moves-existing-files-when-enabled
type: fact
---
Enabling it does not move existing files by itself.

Modeled from REQ-papra-storage-key-sync-on-document-update so the claim can be checked for contradictions.
