---
title: Documents are ordered by creation date descending.
status: active
semantic_text: Documents are ordered by creation date descending.
semantic_clauses:
  - Documents are ordered by creation date descending
logic_claims:
  - CLAIM-B1AA5F4D96384451
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: af9a1ba732eed58ccc530c573ffcc06c3190b66bb990c2e77b599fd82875136c
semantic_inventory:
  - claim_key: CLAIM-B1AA5F4D96384451
    claim_text: Documents are ordered by creation date descending
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 49
    subjects:
      - document_search.search_organization_documents
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-777'
  recorded_at: '2025-02-22T12:17:45.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-documents-are-ordered-by-creation-date-descending
type: req
---
Documents are ordered by creation date descending.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/database-fts5.repository.test.ts (database-fts5 repository > searchOrganizationDocuments).

## Source

Source: Papra server behaviour notes - SRV-777
