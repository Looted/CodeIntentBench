---
title: documents.tag_documents_batch emits_a_single_document_tags_changed_event_carrying = True
status: active
fact_kind: property_value
subject_key: documents.tag_documents_batch
property_key: emits_a_single_document_tags_changed_event_carrying
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-C649AB52361C52BC
claim_text: Emits a single document.tags.changed event carrying the actually-changed pairs
text_ref: REQ-papra-documents-emits-single-document-tags-changed-event-carrying
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1066'
  recorded_at: '2025-12-23T11:59:10.000Z'
id: FACT-papra-documents-tag-documents-batch-emits-a-single-document-tags-changed-event-carrying
type: fact
---
Emits a single document.tags.changed event carrying the actually-changed pairs.

Modeled from REQ-papra-documents-emits-single-document-tags-changed-event-carrying so the claim can be checked for contradictions.
