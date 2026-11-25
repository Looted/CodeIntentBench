---
title: When document.deleted event fires, the document is removed from the search service.
status: active
semantic_text: When document.deleted event fires, the document is removed from the search service.
semantic_clauses:
  - When document.deleted event fires, the document is removed from the search service
logic_claims:
  - CLAIM-59CB0F1D53F0EF78
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2b21d5467b503cb261fb989b0398d6e412746ebac6ff36cb37b17b72a6651151
semantic_inventory:
  - claim_key: CLAIM-59CB0F1D53F0EF78
    claim_text: When document.deleted event fires, the document is removed from the search service
    role: condition
    status: modeled
    span:
      start: 0
      end: 82
    subjects:
      - document_search.register_sync_document_search_event_handlers
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-971'
  recorded_at: '2025-04-27T09:10:27.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-document-deleted-event-fires-document-is-removed
type: req
---
When document.deleted event fires, the document is removed from the search service.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/events/sync-document-search.handlers.test.ts (sync-document-search event handlers > registerSyncDocumentSearchEventHandlers).

## Source

Source: Papra server behaviour notes - SRV-971
