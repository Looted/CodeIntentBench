---
title: When documents.trashed event fires, the documents are marked as deleted in the search service.
status: active
semantic_text: When documents.trashed event fires, the documents are marked as deleted in the search service.
semantic_clauses:
  - When documents.trashed event fires, the documents are marked as deleted in the search service
logic_claims:
  - CLAIM-C0C5E509B665F3EE
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 4e96be055480240f8bf1dab980b932540272f6c354fca7319023cf3d508e3af7
semantic_inventory:
  - claim_key: CLAIM-C0C5E509B665F3EE
    claim_text: When documents.trashed event fires, the documents are marked as deleted in the search service
    role: condition
    status: modeled
    span:
      start: 0
      end: 93
    subjects:
      - document_search.register_sync_document_search_event_handlers
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-981'
  recorded_at: '2025-12-20T15:09:55.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-documents-trashed-event-fires-documents-are-marked
type: req
---
When documents.trashed event fires, the documents are marked as deleted in the search service.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/events/sync-document-search.handlers.test.ts (sync-document-search event handlers > registerSyncDocumentSearchEventHandlers).

## Source

Source: Papra server behaviour notes - SRV-981
