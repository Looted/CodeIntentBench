---
title: Enforces organization isolation to prevent searching documents from other organizations.
status: active
semantic_text: Enforces organization isolation to prevent searching documents from other organizations.
semantic_clauses:
  - Enforces organization isolation to prevent searching documents from other organizations
logic_claims:
  - CLAIM-6841AEE146ED39F3
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b43db63129e93d665b9890d65bcf076ada4d2f538dce0f75466e6010c730c55f
semantic_inventory:
  - claim_key: CLAIM-6841AEE146ED39F3
    claim_text: Enforces organization isolation to prevent searching documents from other organizations
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 87
    subjects:
      - document_search.search_organization_documents
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-785'
  recorded_at: '2026-06-01T15:34:49.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-enforces-organization-isolation-to-prevent-searching-documents
type: req
---
Enforces organization isolation to prevent searching documents from other organizations.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/database-fts5.repository.test.ts (database-fts5 repository > searchOrganizationDocuments).

## Source

Source: Papra server behaviour notes - SRV-785
