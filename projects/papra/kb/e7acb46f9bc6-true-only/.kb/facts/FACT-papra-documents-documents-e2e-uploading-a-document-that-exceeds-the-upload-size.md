---
title: documents.documents_e2e uploading_a_document_that_exceeds_the_upload_size = True
status: active
fact_kind: property_value
subject_key: documents.documents_e2e
property_key: uploading_a_document_that_exceeds_the_upload_size
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-C5DA73F4FA5B4754
claim_text: Uploading a document that exceeds the upload size limit returns a 413
text_ref: REQ-papra-documents-uploading-document-that-exceeds-upload-size-limit
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1256'
  recorded_at: '2026-05-11T17:12:22.000Z'
id: FACT-papra-documents-documents-e2e-uploading-a-document-that-exceeds-the-upload-size
type: fact
---
Uploading a document that exceeds the upload size limit returns a 413.

Modeled from REQ-papra-documents-uploading-document-that-exceeds-upload-size-limit so the claim can be checked for contradictions.
