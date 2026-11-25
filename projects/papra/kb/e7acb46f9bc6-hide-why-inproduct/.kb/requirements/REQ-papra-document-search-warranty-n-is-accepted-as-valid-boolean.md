---
title: Warranty:n is accepted as a valid boolean value.
status: active
semantic_text: Warranty:n is accepted as a valid boolean value.
semantic_clauses:
  - Warranty:n is accepted as a valid boolean value
logic_claims:
  - CLAIM-736E8D67712363CA
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 874c2efbf36d44682f71cd82e1a12b074a78e90653a31500d783b7719df7ea64
semantic_inventory:
  - claim_key: CLAIM-736E8D67712363CA
    claim_text: Warranty:n is accepted as a valid boolean value
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 47
    subjects:
      - document_search.query_builder_custom_properties
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-893'
  recorded_at: '2025-04-09T11:18:34.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-warranty-n-is-accepted-as-valid-boolean
type: req
---
Warranty:n is accepted as a valid boolean value.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/query-builder/query-builder.custom-properties.test.ts (query-builder - custom properties > boolean property filter).

## Source

Source: Papra server behaviour notes - SRV-893
