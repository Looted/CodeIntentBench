---
title: A document with no tags gets an empty tags array.
status: active
semantic_text: A document with no tags gets an empty tags array.
semantic_clauses:
  - A document with no tags gets an empty tags array
logic_claims:
  - CLAIM-2E5E47EBE6E38BCB
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 6825d8bcc43a4c4fe0e6a7f6f99cc2a413e2610100f54306746832cc31377ee7
semantic_inventory:
  - claim_key: CLAIM-2E5E47EBE6E38BCB
    claim_text: A document with no tags gets an empty tags array
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 48
    subjects:
      - documents.enrich_documents_for_api
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1172'
  recorded_at: '2025-10-20T08:16:17.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-document-with-no-tags-gets-empty-tags
type: req
---
A document with no tags gets an empty tags array.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.usecases.test.ts (documents usecases > enrichDocumentsForApi).

## Source

Source: Papra server behaviour notes - SRV-1172
