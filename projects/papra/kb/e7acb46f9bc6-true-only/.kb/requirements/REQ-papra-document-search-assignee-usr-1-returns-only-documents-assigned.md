---
title: Assignee:usr_1 returns only documents assigned to user with that id.
status: active
semantic_text: Assignee:usr_1 returns only documents assigned to user with that id.
semantic_clauses:
  - Assignee:usr_1 returns only documents assigned to user with that id
logic_claims:
  - CLAIM-5FE995F7DE8972B6
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1c53f0f99604d23f77af6b67a9d4e3a690448588c276c09f16b97642684f7c2b
semantic_inventory:
  - claim_key: CLAIM-5FE995F7DE8972B6
    claim_text: Assignee:usr_1 returns only documents assigned to user with that id
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 67
    subjects:
      - document_search.database_fts5_repository
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-767'
  recorded_at: '2025-10-26T09:27:56.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-assignee-usr-1-returns-only-documents-assigned
type: req
---
Assignee:usr_1 returns only documents assigned to user with that id.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/database-fts5.repository.test.ts (database-fts5 repository > custom property filters > user_relation property).

## Source

Source: Papra server behaviour notes - SRV-767
