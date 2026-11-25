---
title: documents.create_document a_new_document_key_uses_its_persisted_creation = True
status: active
fact_kind: property_value
subject_key: documents.create_document
property_key: a_new_document_key_uses_its_persisted_creation
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-72610440635CC03A
claim_text: A new document key uses its persisted creation timestamp and the missing-date fallback
text_ref: REQ-papra-documents-new-document-key-uses-its-persisted-creation
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1179'
  recorded_at: '2026-02-10T13:28:19.000Z'
id: FACT-papra-documents-create-document-a-new-document-key-uses-its-persisted-creation
type: fact
---
A new document key uses its persisted creation timestamp and the missing-date fallback.

Modeled from REQ-papra-documents-new-document-key-uses-its-persisted-creation so the claim can be checked for contradictions.
