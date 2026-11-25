---
title: Status:approved returns only documents whose select option key is "approved".
status: active
semantic_text: Status:approved returns only documents whose select option key is "approved".
semantic_clauses:
  - Status:approved returns only documents whose select option key is "approved"
logic_claims:
  - CLAIM-EB647E8E580C0D32
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: db1402746fc614c791e7470a0c270142de41c3e77e7982aca07a0e33831f782f
semantic_inventory:
  - claim_key: CLAIM-EB647E8E580C0D32
    claim_text: Status:approved returns only documents whose select option key is "approved"
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 76
    subjects:
      - document_search.database_fts5_repository
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-826'
  recorded_at: '2026-05-16T12:19:09.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-status-approved-returns-only-documents-whose-select
type: req
---
Status:approved returns only documents whose select option key is "approved".

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/database-fts5.repository.test.ts (database-fts5 repository > custom property filters > select property).

## Source

Source: Papra server behaviour notes - SRV-826
