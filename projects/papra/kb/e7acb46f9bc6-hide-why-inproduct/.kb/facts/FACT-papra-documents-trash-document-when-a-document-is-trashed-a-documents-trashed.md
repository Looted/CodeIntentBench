---
title: documents.trash_document when_a_document_is_trashed_a_documents_trashed = True
status: active
fact_kind: property_value
subject_key: documents.trash_document
property_key: when_a_document_is_trashed_a_documents_trashed
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-1F2BA10808260C94
claim_text: When a document is trashed, a "documents.trashed" event is triggered
text_ref: REQ-papra-documents-document-is-trashed-documents-trashed-event-is
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1216'
  recorded_at: '2025-04-24T14:31:30.000Z'
id: FACT-papra-documents-trash-document-when-a-document-is-trashed-a-documents-trashed
type: fact
---
When a document is trashed, a "documents.trashed" event is triggered.

Modeled from REQ-papra-documents-document-is-trashed-documents-trashed-event-is so the claim can be checked for contradictions.
