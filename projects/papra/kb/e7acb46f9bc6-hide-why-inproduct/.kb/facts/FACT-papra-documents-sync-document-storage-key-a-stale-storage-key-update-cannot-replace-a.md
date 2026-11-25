---
title: documents.sync_document_storage_key a_stale_storage_key_update_cannot_replace_a = True
status: active
fact_kind: property_value
subject_key: documents.sync_document_storage_key
property_key: a_stale_storage_key_update_cannot_replace_a
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-50959C9F6E0B20C8
claim_text: A stale storage-key update cannot replace a newer database key or cross organizations
text_ref: REQ-papra-documents-stale-storage-key-update-cannot-replace-newer
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-994'
  recorded_at: '2026-04-24T11:01:18.000Z'
id: FACT-papra-documents-sync-document-storage-key-a-stale-storage-key-update-cannot-replace-a
type: fact
---
A stale storage-key update cannot replace a newer database key or cross organizations.

Modeled from REQ-papra-documents-stale-storage-key-update-cannot-replace-newer so the claim can be checked for contradictions.
