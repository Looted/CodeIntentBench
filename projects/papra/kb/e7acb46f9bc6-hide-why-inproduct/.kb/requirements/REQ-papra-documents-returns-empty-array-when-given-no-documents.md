---
title: Returns an empty array when given no documents.
status: active
semantic_text: Returns an empty array when given no documents.
semantic_clauses:
  - Returns an empty array when given no documents
logic_claims:
  - CLAIM-E3D32712E68619FD
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 20170add98109640ca75690caec1625017e89b5bac90bf838b0c982149e5c2e2
semantic_inventory:
  - claim_key: CLAIM-E3D32712E68619FD
    claim_text: Returns an empty array when given no documents
    role: normative
    status: modeled
    span:
      start: 0
      end: 46
    subjects:
      - documents.enrich_documents_for_api
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1198'
  recorded_at: '2025-03-16T13:12:51.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-returns-empty-array-when-given-no-documents
type: req
---
Returns an empty array when given no documents.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.usecases.test.ts (documents usecases > enrichDocumentsForApi).

## Source

Source: Papra server behaviour notes - SRV-1198
