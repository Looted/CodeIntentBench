---
title: When document.restored event fires, the document is marked as not deleted in the search service.
status: active
semantic_text: When document.restored event fires, the document is marked as not deleted in the search service.
semantic_clauses:
  - When document.restored event fires, the document is marked as not deleted in the search service
logic_claims:
  - CLAIM-3835570B0EF14976
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 26311c934ee000579e1d3dacd8ccb7177f9afdf810e343f6c86918b1e26c1c27
semantic_inventory:
  - claim_key: CLAIM-3835570B0EF14976
    claim_text: When document.restored event fires, the document is marked as not deleted in the search service
    role: condition
    status: modeled
    span:
      start: 0
      end: 95
    subjects:
      - document_search.register_sync_document_search_event_handlers
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-975'
  recorded_at: '2025-08-23T17:05:02.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-document-restored-event-fires-document-is-marked
type: req
---
When document.restored event fires, the document is marked as not deleted in the search service.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/events/sync-document-search.handlers.test.ts (sync-document-search event handlers > registerSyncDocumentSearchEventHandlers).

## Source

Source: Papra server behaviour notes - SRV-975
