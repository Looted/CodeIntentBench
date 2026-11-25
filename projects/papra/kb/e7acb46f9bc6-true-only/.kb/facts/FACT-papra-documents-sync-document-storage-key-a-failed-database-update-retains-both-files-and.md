---
title: documents.sync_document_storage_key a_failed_database_update_retains_both_files_and = True
status: active
fact_kind: property_value
subject_key: documents.sync_document_storage_key
property_key: a_failed_database_update_retains_both_files_and
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-0FBCEEC46FF796BC
claim_text: A failed database update retains both files and does not block later synchronization
text_ref: REQ-papra-documents-failed-database-update-retains-both-files-and
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-990'
  recorded_at: '2025-08-10T17:10:59.000Z'
id: FACT-papra-documents-sync-document-storage-key-a-failed-database-update-retains-both-files-and
type: fact
---
A failed database update retains both files and does not block later synchronization.

Modeled from REQ-papra-documents-failed-database-update-retains-both-files-and so the claim can be checked for contradictions.
