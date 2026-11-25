---
title: documents.trash_documents_batch emits_a_documents_trashed_event_with_the_actually = True
status: active
fact_kind: property_value
subject_key: documents.trash_documents_batch
property_key: emits_a_documents_trashed_event_with_the_actually
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-02C3C60EA075CE15
claim_text: Emits a documents.trashed event with the actually trashed ids
text_ref: REQ-papra-documents-emits-documents-trashed-event-with-actually-trashed
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1063'
  recorded_at: '2026-02-22T16:14:35.000Z'
id: FACT-papra-documents-trash-documents-batch-emits-a-documents-trashed-event-with-the-actually
type: fact
---
Emits a documents.trashed event with the actually trashed ids.

Modeled from REQ-papra-documents-emits-documents-trashed-event-with-actually-trashed so the claim can be checked for contradictions.
