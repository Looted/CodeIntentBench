---
title: Documents can be sorted by update date.
status: active
semantic_text: Documents can be sorted by update date.
semantic_clauses:
  - Documents can be sorted by update date
logic_claims:
  - CLAIM-3DCE549DA4EB9552
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0d5dac0c229d3475279903489576984b202c065934eccb72d4b097b0c0329cc3
semantic_inventory:
  - claim_key: CLAIM-3DCE549DA4EB9552
    claim_text: Documents can be sorted by update date
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 38
    subjects:
      - document_search.sort
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-782'
  recorded_at: '2025-05-18T17:57:23.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-documents-can-be-sorted-by-update-date
type: req
---
Documents can be sorted by update date.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/database-fts5.repository.test.ts (database-fts5 repository > searchOrganizationDocuments > sort).

## Source

Source: Papra server behaviour notes - SRV-782
