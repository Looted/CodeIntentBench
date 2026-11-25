---
title: documents.create_document when_a_document_is_added_a_document_created = True
status: active
fact_kind: property_value
subject_key: documents.create_document
property_key: when_a_document_is_added_a_document_created
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-2A818C9A8444FA60
claim_text: When a document is added, a "document.created" event is triggered
text_ref: REQ-papra-documents-document-is-added-document-created-event-is
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1210'
  recorded_at: '2025-09-03T12:46:39.000Z'
id: FACT-papra-documents-create-document-when-a-document-is-added-a-document-created
type: fact
---
When a document is added, a "document.created" event is triggered.

Modeled from REQ-papra-documents-document-is-added-document-created-event-is so the claim can be checked for contradictions.
