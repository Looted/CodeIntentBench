---
title: document_search.register_sync_document_search_event_handlers when_document_deleted_event_fires_the_document_is = True
status: active
fact_kind: property_value
subject_key: document_search.register_sync_document_search_event_handlers
property_key: when_document_deleted_event_fires_the_document_is
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-59CB0F1D53F0EF78
claim_text: When document.deleted event fires, the document is removed from the search service
text_ref: REQ-papra-document-search-document-deleted-event-fires-document-is-removed
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-971'
  recorded_at: '2025-04-27T09:10:27.000Z'
id: FACT-papra-document-search-register-sync-document-search-event-handlers-when-document-deleted-event-fires-the-document-is
type: fact
---
When document.deleted event fires, the document is removed from the search service.

Modeled from REQ-papra-document-search-document-deleted-event-fires-document-is-removed so the claim can be checked for contradictions.
