---
title: Adds the tag to every resolved document.
status: active
semantic_text: Adds the tag to every resolved document.
semantic_clauses:
  - Adds the tag to every resolved document
logic_claims:
  - CLAIM-2C18BB8348D3647D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 84d420f6b6e7e3556e28025675458b4f55c4c12c1435bbaf1a3e1a4e45b0dbeb
semantic_inventory:
  - claim_key: CLAIM-2C18BB8348D3647D
    claim_text: Adds the tag to every resolved document
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 39
    subjects:
      - documents.tag_documents_batch
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1054'
  recorded_at: '2026-05-01T13:34:16.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-adds-tag-to-every-resolved-document
type: req
---
Adds the tag to every resolved document.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents-batch/documents-batch.usecases.test.ts (documents-batch usecases > tagDocumentsBatch).

## Source

Source: Papra server behaviour notes - SRV-1054
