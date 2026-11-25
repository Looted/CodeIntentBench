---
title: Warranty:off is accepted as a valid boolean value.
status: active
semantic_text: Warranty:off is accepted as a valid boolean value.
semantic_clauses:
  - Warranty:off is accepted as a valid boolean value
logic_claims:
  - CLAIM-1AFEF456F86AC9DA
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2e289bf4634bfe0c9e14aa67bca6147c34b490e7325f2ef7dae9f00c54a502d3
semantic_inventory:
  - claim_key: CLAIM-1AFEF456F86AC9DA
    claim_text: Warranty:off is accepted as a valid boolean value
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 49
    subjects:
      - document_search.query_builder_custom_properties
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-900'
  recorded_at: '2025-07-14T13:49:14.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-warranty-off-is-accepted-as-valid-boolean
type: req
---
Warranty:off is accepted as a valid boolean value.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/query-builder/query-builder.custom-properties.test.ts (query-builder - custom properties > boolean property filter).

## Source

Source: Papra server behaviour notes - SRV-900
