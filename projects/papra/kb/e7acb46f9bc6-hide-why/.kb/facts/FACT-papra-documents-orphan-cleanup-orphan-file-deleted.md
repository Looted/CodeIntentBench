---
title: documents.orphan_cleanup orphan_file_deleted = True
status: active
fact_kind: property_value
subject_key: documents.orphan_cleanup
property_key: orphan_file_deleted
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-598A32AC630EC71D
claim_text: When an upload matches a document in the trash, the file the upload wrote is deleted as an orphan once the trashed document is restored
text_ref: REQ-papra-orphan-file-cleanup-on-trashed-duplicate
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.0.0 changelog, #715: Properly cleanup orphan file when the same document exists i'
  recorded_at: '2026-11-16T13:17:25.352Z'
id: FACT-papra-documents-orphan-cleanup-orphan-file-deleted
type: fact
---
When an upload matches a document in the trash, the file the upload wrote is deleted as an orphan once the trashed document is restored.

Modeled from REQ-papra-orphan-file-cleanup-on-trashed-duplicate so the claim can be checked for contradictions.
