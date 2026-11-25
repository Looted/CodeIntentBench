---
title: Re-evaluates current dates and random expressions on subsequent updates.
status: active
semantic_text: Re-evaluates current dates and random expressions on subsequent updates.
semantic_clauses:
  - Re-evaluates current dates and random expressions on subsequent updates
logic_claims:
  - CLAIM-7BD2C923CBCF1AD2
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f5c1295330a7c4adfa2bd68f3a24e0da08e8f34cb4b2396c3bf28ccded3863fa
semantic_inventory:
  - claim_key: CLAIM-7BD2C923CBCF1AD2
    claim_text: Re-evaluates current dates and random expressions on subsequent updates
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 71
    subjects:
      - documents.sync_document_storage_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1017'
  recorded_at: '2026-07-15T15:20:56.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-re-evaluates-current-dates-and-random-expressions
type: req
---
Re-evaluates current dates and random expressions on subsequent updates.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-storage.usecases.test.ts (syncDocumentStorageKey).

## Source

Source: Papra server behaviour notes - SRV-1017
