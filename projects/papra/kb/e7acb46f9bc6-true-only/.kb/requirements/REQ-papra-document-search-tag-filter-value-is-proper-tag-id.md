---
title: When the tag filter value is a proper tag id, the built query matches by id.
status: active
semantic_text: When the tag filter value is a proper tag id, the built query matches by id.
semantic_clauses:
  - When the tag filter value is a proper tag id, the built query matches by id
logic_claims:
  - CLAIM-A320D8B1D2C149AA
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b0393073eb62486355e73c9ab465f3f3688bf11707ac9b69acb990712c5007fc
semantic_inventory:
  - claim_key: CLAIM-A320D8B1D2C149AA
    claim_text: When the tag filter value is a proper tag id, the built query matches by id
    role: condition
    status: modeled
    span:
      start: 0
      end: 75
    subjects:
      - document_search.handle_tag_filter
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-962'
  recorded_at: '2025-06-01T12:14:06.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-tag-filter-value-is-proper-tag-id
type: req
---
When the tag filter value is a proper tag id, the built query matches by id.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/query-builder/query-builder.test.ts (query-builder > handleTagFilter).

## Source

Source: Papra server behaviour notes - SRV-962
