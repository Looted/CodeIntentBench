---
title: Storage key synchronization
status: active
fact_kind: subject
subject_key: document.storage_key_sync
canonical_key: document.storage_key_sync
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra documentation site (apps/docs): 03-guides/09-storage-key-patterns.mdx#synchronizing-storage-keys-on-document-updates'
  recorded_at: '2026-11-15T22:56:58.284Z'
id: FACT-papra-subject-document-storage-key-sync
type: fact
---
The optional behaviour (DOCUMENT_STORAGE_KEY_SYNC_ENABLED, pattern-based storage keys only) that re-evaluates the storage key pattern when a document changes and moves the stored file to the new key. It is not the storage migration script, which reprocesses existing documents in bulk.