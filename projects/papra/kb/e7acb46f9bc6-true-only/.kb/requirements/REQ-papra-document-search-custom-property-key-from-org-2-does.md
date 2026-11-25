---
title: A custom property key from org_2 does not match documents in org_1.
status: active
semantic_text: A custom property key from org_2 does not match documents in org_1.
semantic_clauses:
  - A custom property key from org_2 does not match documents in org_1
logic_claims:
  - CLAIM-A219C463F099D74D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a17d9be59d8d66ace8cb7c67dc25184cd3ee2f675127b9e766e561e9e05c0fa3
semantic_inventory:
  - claim_key: CLAIM-A219C463F099D74D
    claim_text: A custom property key from org_2 does not match documents in org_1
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 66
    subjects:
      - document_search.database_fts5_repository
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-751'
  recorded_at: '2026-03-20T16:18:55.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-custom-property-key-from-org-2-does
type: req
---
A custom property key from org_2 does not match documents in org_1.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/database-fts5.repository.test.ts (database-fts5 repository > custom property filters > organization isolation).

## Source

Source: Papra server behaviour notes - SRV-751
