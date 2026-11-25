---
title: document_search.register_sync_document_search_event_handlers when_document_restored_event_fires_the_document_is = True
status: active
fact_kind: property_value
subject_key: document_search.register_sync_document_search_event_handlers
property_key: when_document_restored_event_fires_the_document_is
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-3835570B0EF14976
claim_text: When document.restored event fires, the document is marked as not deleted in the search service
text_ref: REQ-papra-document-search-document-restored-event-fires-document-is-marked
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-975'
  recorded_at: '2025-08-23T17:05:02.000Z'
id: FACT-papra-document-search-register-sync-document-search-event-handlers-when-document-restored-event-fires-the-document-is
type: fact
---
When document.restored event fires, the document is marked as not deleted in the search service.

Modeled from REQ-papra-document-search-document-restored-event-fires-document-is-marked so the claim can be checked for contradictions.
