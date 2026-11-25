---
title: documents.create_document when_a_document_is_created_that_exceeds_the = True
status: active
fact_kind: property_value
subject_key: documents.create_document
property_key: when_a_document_is_created_that_exceeds_the
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-D2996D94184844EB
claim_text: When a document is created that exceeds the file size limit, an error is thrown and nothing is saved in the db
text_ref: REQ-papra-documents-document-is-created-that-exceeds-file-size
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1211'
  recorded_at: '2025-04-11T09:59:09.000Z'
id: FACT-papra-documents-create-document-when-a-document-is-created-that-exceeds-the
type: fact
---
When a document is created that exceeds the file size limit, an error is thrown and nothing is saved in the db.

Modeled from REQ-papra-documents-document-is-created-that-exceeds-file-size so the claim can be checked for contradictions.
