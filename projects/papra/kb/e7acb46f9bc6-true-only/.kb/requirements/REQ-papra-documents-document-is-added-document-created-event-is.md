---
title: When a document is added, a "document.created" event is triggered.
status: active
semantic_text: When a document is added, a "document.created" event is triggered.
semantic_clauses:
  - When a document is added, a "document.created" event is triggered
logic_claims:
  - CLAIM-2A818C9A8444FA60
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a557e8170e18033f2b154883204c1175642fe210a7bbcf8a8ae58c8f3c1a1972
semantic_inventory:
  - claim_key: CLAIM-2A818C9A8444FA60
    claim_text: When a document is added, a "document.created" event is triggered
    role: condition
    status: modeled
    span:
      start: 0
      end: 65
    subjects:
      - documents.create_document
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1210'
  recorded_at: '2025-09-03T12:46:39.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-document-is-added-document-created-event-is
type: req
---
When a document is added, a "document.created" event is triggered.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.usecases.test.ts (documents usecases > createDocument).

## Source

Source: Papra server behaviour notes - SRV-1210
