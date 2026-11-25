---
title: Labels:urgent returns documents that have the "urgent" option among their multi-select values.
status: active
semantic_text: Labels:urgent returns documents that have the "urgent" option among their multi-select values.
semantic_clauses:
  - Labels:urgent returns documents that have the "urgent" option among their multi-select values
logic_claims:
  - CLAIM-2ADAFC244D98C4BF
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a4ea72b19c480d632d664ae17e5c5a834c90869b841e2beeae2f58ef5c1b9962
semantic_inventory:
  - claim_key: CLAIM-2ADAFC244D98C4BF
    claim_text: Labels:urgent returns documents that have the "urgent" option among their multi-select values
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 93
    subjects:
      - document_search.database_fts5_repository
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-806'
  recorded_at: '2025-03-02T12:44:03.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-labels-urgent-returns-documents-that-have-urgent
type: req
---
Labels:urgent returns documents that have the "urgent" option among their multi-select values.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/database-fts5.repository.test.ts (database-fts5 repository > custom property filters > multi_select property).

## Source

Source: Papra server behaviour notes - SRV-806
