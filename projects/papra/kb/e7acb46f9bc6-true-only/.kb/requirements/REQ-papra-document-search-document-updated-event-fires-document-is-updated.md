---
title: When document.updated event fires, the document is updated in the search service with the changes.
status: active
semantic_text: When document.updated event fires, the document is updated in the search service with the changes.
semantic_clauses:
  - When document.updated event fires, the document is updated in the search service with the changes
logic_claims:
  - CLAIM-DBD6A38C9178C2B1
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: adf498d0809b3ecc4519c0134c8cda133283d7dd16273a849a474a2ae6a8a3a7
semantic_inventory:
  - claim_key: CLAIM-DBD6A38C9178C2B1
    claim_text: When document.updated event fires, the document is updated in the search service with the changes
    role: condition
    status: modeled
    span:
      start: 0
      end: 97
    subjects:
      - document_search.register_sync_document_search_event_handlers
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-978'
  recorded_at: '2026-05-22T09:09:55.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-document-updated-event-fires-document-is-updated
type: req
---
When document.updated event fires, the document is updated in the search service with the changes.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/events/sync-document-search.handlers.test.ts (sync-document-search event handlers > registerSyncDocumentSearchEventHandlers).

## Source

Source: Papra server behaviour notes - SRV-978
