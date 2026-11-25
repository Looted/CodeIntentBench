---
title: Documents can be sorted by document date, with null dates ordered first ascending and last descending.
status: active
semantic_text: Documents can be sorted by document date, with null dates ordered first ascending and last descending.
semantic_clauses:
  - Documents can be sorted by document date, with null dates ordered first ascending and last descending
logic_claims:
  - CLAIM-859698EDEBA0D19F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b068c2e210584172bf77357960dd9a5e0084afb307ab915de5a18993555ca19b
semantic_inventory:
  - claim_key: CLAIM-859698EDEBA0D19F
    claim_text: Documents can be sorted by document date, with null dates ordered first ascending and last descending
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 101
    subjects:
      - document_search.sort
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-779'
  recorded_at: '2026-01-25T10:50:01.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-documents-can-be-sorted-by-document-date
type: req
---
Documents can be sorted by document date, with null dates ordered first ascending and last descending.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/database-fts5.repository.test.ts (database-fts5 repository > searchOrganizationDocuments > sort).

## Source

Source: Papra server behaviour notes - SRV-779
