---
title: storage.driver_delete hard_deletes_file = True
status: active
fact_kind: property_value
subject_key: storage.driver_delete
property_key: hard_deletes_file
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-7C4CBFADBD070CBF
claim_text: 'Deleting a document file removes it from the storage backend: storage drivers hard delete the file'
text_ref: REQ-papra-storage-driver-hard-deletes-files
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 0.4.0 changelog, #280: Properly hard delete files in storage driver'
  recorded_at: '2026-11-16T10:30:41.421Z'
id: FACT-papra-storage-driver-delete-hard-deletes-file
type: fact
---
Deleting a document file removes it from the storage backend: storage drivers hard delete the file.

Modeled from REQ-papra-storage-driver-hard-deletes-files so the claim can be checked for contradictions.
