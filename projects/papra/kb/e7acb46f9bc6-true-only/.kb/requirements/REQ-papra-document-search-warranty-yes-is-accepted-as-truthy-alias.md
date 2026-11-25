---
title: Warranty:yes is accepted as truthy alias.
status: active
semantic_text: Warranty:yes is accepted as truthy alias.
semantic_clauses:
  - Warranty:yes is accepted as truthy alias
logic_claims:
  - CLAIM-9F81BFBAC0085956
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: dbaa7fe9b6507f702f22dddb44953065e666ac03b506b56ea7fb2d2304877f3e
semantic_inventory:
  - claim_key: CLAIM-9F81BFBAC0085956
    claim_text: Warranty:yes is accepted as truthy alias
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 40
    subjects:
      - document_search.database_fts5_repository
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-842'
  recorded_at: '2026-07-25T12:31:52.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-warranty-yes-is-accepted-as-truthy-alias
type: req
---
Warranty:yes is accepted as truthy alias.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/database-fts5.repository.test.ts (database-fts5 repository > custom property filters > boolean property).

## Source

Source: Papra server behaviour notes - SRV-842
