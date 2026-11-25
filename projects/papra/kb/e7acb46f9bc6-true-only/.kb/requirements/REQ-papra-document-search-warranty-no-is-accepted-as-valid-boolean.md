---
title: Warranty:no is accepted as a valid boolean value.
status: active
semantic_text: Warranty:no is accepted as a valid boolean value.
semantic_clauses:
  - Warranty:no is accepted as a valid boolean value
logic_claims:
  - CLAIM-0B4544FFC8FF189D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 47293441fc01453d7a20b15eaa61b5e144bb7823101bb5b996459ab88882c093
semantic_inventory:
  - claim_key: CLAIM-0B4544FFC8FF189D
    claim_text: Warranty:no is accepted as a valid boolean value
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 48
    subjects:
      - document_search.query_builder_custom_properties
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-897'
  recorded_at: '2026-09-17T14:28:59.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-warranty-no-is-accepted-as-valid-boolean
type: req
---
Warranty:no is accepted as a valid boolean value.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/query-builder/query-builder.custom-properties.test.ts (query-builder - custom properties > boolean property filter).

## Source

Source: Papra server behaviour notes - SRV-897
