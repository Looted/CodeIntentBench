---
title: documents.sync_document_storage_key moves_stored_bytes_and_only_changes_the_storage = True
status: active
fact_kind: property_value
subject_key: documents.sync_document_storage_key
property_key: moves_stored_bytes_and_only_changes_the_storage
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-E2109BA26273BE6B
claim_text: Moves stored bytes and only changes the storage key, preserving encryption metadata
text_ref: REQ-papra-documents-moves-stored-bytes-and-only-changes-storage
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1013'
  recorded_at: '2025-11-13T08:20:17.000Z'
id: FACT-papra-documents-sync-document-storage-key-moves-stored-bytes-and-only-changes-the-storage
type: fact
---
Moves stored bytes and only changes the storage key, preserving encryption metadata.

Modeled from REQ-papra-documents-moves-stored-bytes-and-only-changes-storage so the claim can be checked for contradictions.
