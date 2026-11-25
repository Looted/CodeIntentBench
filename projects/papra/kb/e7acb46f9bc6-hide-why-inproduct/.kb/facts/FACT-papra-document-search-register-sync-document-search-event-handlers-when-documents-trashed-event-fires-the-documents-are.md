---
title: document_search.register_sync_document_search_event_handlers when_documents_trashed_event_fires_the_documents_are = True
status: active
fact_kind: property_value
subject_key: document_search.register_sync_document_search_event_handlers
property_key: when_documents_trashed_event_fires_the_documents_are
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-C0C5E509B665F3EE
claim_text: When documents.trashed event fires, the documents are marked as deleted in the search service
text_ref: REQ-papra-document-search-documents-trashed-event-fires-documents-are-marked
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-981'
  recorded_at: '2025-12-20T15:09:55.000Z'
id: FACT-papra-document-search-register-sync-document-search-event-handlers-when-documents-trashed-event-fires-the-documents-are
type: fact
---
When documents.trashed event fires, the documents are marked as deleted in the search service.

Modeled from REQ-papra-document-search-documents-trashed-event-fires-documents-are-marked so the claim can be checked for contradictions.
