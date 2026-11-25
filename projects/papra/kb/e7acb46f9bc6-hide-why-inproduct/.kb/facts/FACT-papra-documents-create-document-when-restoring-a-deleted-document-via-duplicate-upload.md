---
title: documents.create_document when_restoring_a_deleted_document_via_duplicate_upload = True
status: active
fact_kind: property_value
subject_key: documents.create_document
property_key: when_restoring_a_deleted_document_via_duplicate_upload
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-5D31E796C728E763
claim_text: When restoring a deleted document via duplicate upload, the optimistically saved new file should be cleaned up to prevent orphan files
text_ref: REQ-papra-documents-restoring-deleted-document-via-duplicate-upload-optimistically
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1224'
  recorded_at: '2026-08-08T10:48:29.000Z'
id: FACT-papra-documents-create-document-when-restoring-a-deleted-document-via-duplicate-upload
type: fact
---
When restoring a deleted document via duplicate upload, the optimistically saved new file should be cleaned up to prevent orphan files.

Modeled from REQ-papra-documents-restoring-deleted-document-via-duplicate-upload-optimistically so the claim can be checked for contradictions.
