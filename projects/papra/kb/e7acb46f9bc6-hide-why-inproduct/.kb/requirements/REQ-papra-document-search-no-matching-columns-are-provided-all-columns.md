---
title: If no matching columns are provided, all columns are searched.
status: active
semantic_text: If no matching columns are provided, all columns are searched.
semantic_clauses:
  - If no matching columns are provided, all columns are searched
logic_claims:
  - CLAIM-3396CEEAC8DC7AFA
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d601a3a2e8fe33ce043c1da7da441203b7ce330b2aba4df514daf12f48d29ef1
semantic_inventory:
  - claim_key: CLAIM-3396CEEAC8DC7AFA
    claim_text: If no matching columns are provided, all columns are searched
    role: condition
    status: modeled
    span:
      start: 0
      end: 61
    subjects:
      - document_search.format_fts5_query_value
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-917'
  recorded_at: '2025-10-21T16:25:29.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-no-matching-columns-are-provided-all-columns
type: req
---
If no matching columns are provided, all columns are searched.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/query-builder/query-builder.models.test.ts (query-builder models > formatFts5QueryValue).

## Source

Source: Papra server behaviour notes - SRV-917
