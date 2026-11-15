---
title: document.storage_key_sync failed_move_keeps_original_file = True
status: active
fact_kind: property_value
subject_key: document.storage_key_sync
property_key: failed_move_keeps_original_file
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-40F125176F954E2E
claim_text: a failed copy or database update keeps the original file
text_ref: REQ-papra-storage-key-sync-on-document-update
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra merged pull requests: #1525'
  recorded_at: '2026-11-15T23:00:04.978Z'
id: FACT-papra-document-storage-key-sync-failed-move-keeps-original-file
type: fact
---
A failed copy or database update keeps the original file.

Modeled from REQ-papra-storage-key-sync-on-document-update so the claim can be checked for contradictions.
