---
title: Handles a result set larger than the SQL host-parameter limit by chunking the soft-delete.
status: active
semantic_text: Handles a result set larger than the SQL host-parameter limit by chunking the soft-delete.
semantic_clauses:
  - Handles a result set larger than the SQL host-parameter limit by chunking the soft-delete
logic_claims:
  - CLAIM-ECD608E027D204A0
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 22016ee21374de88e5105291efa8a933c29e2c52e48e5e1cee957d8bcc00088d
semantic_inventory:
  - claim_key: CLAIM-ECD608E027D204A0
    claim_text: Handles a result set larger than the SQL host-parameter limit by chunking the soft-delete
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 89
    subjects:
      - documents.trash_documents_batch
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1069'
  recorded_at: '2025-11-15T13:29:04.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-handles-result-set-larger-than-sql-host
type: req
---
Handles a result set larger than the SQL host-parameter limit by chunking the soft-delete.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents-batch/documents-batch.usecases.test.ts (documents-batch usecases > trashDocumentsBatch).

## Source

Source: Papra server behaviour notes - SRV-1069
