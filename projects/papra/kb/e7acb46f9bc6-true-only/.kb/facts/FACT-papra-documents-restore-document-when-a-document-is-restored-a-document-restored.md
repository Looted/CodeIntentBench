---
title: documents.restore_document when_a_document_is_restored_a_document_restored = True
status: active
fact_kind: property_value
subject_key: documents.restore_document
property_key: when_a_document_is_restored_a_document_restored
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-F30905C0921E43D7
claim_text: When a document is restored, a "document.restored" event is triggered
text_ref: REQ-papra-documents-document-is-restored-document-restored-event-is
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1213'
  recorded_at: '2026-03-21T12:17:34.000Z'
id: FACT-papra-documents-restore-document-when-a-document-is-restored-a-document-restored
type: fact
---
When a document is restored, a "document.restored" event is triggered.

Modeled from REQ-papra-documents-document-is-restored-document-restored-event-is so the claim can be checked for contradictions.
