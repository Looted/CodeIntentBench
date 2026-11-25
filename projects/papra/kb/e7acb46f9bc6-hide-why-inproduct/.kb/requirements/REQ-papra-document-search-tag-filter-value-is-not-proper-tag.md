---
title: When the tag filter value is not a proper tag id, the built query matches by name.
status: active
semantic_text: When the tag filter value is not a proper tag id, the built query matches by name.
semantic_clauses:
  - When the tag filter value is not a proper tag id, the built query matches by name
logic_claims:
  - CLAIM-719A927305424986
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 60255bda5e3c6ac37d83e0976a14e5dd77921e65921abdb3d8aae994ca0d0f60
semantic_inventory:
  - claim_key: CLAIM-719A927305424986
    claim_text: When the tag filter value is not a proper tag id, the built query matches by name
    role: condition
    status: modeled
    span:
      start: 0
      end: 81
    subjects:
      - document_search.handle_tag_filter
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-966'
  recorded_at: '2025-08-22T12:24:07.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-tag-filter-value-is-not-proper-tag
type: req
---
When the tag filter value is not a proper tag id, the built query matches by name.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/query-builder/query-builder.test.ts (query-builder > handleTagFilter).

## Source

Source: Papra server behaviour notes - SRV-966
