---
title: 'The document list route no longer accepts a tags filter; documents are filtered by tag through a tag: search query.'
status: active
semantic_text: 'The document list route no longer accepts a tags filter; documents are filtered by tag through a tag: search query.'
semantic_clauses:
  - The document list route no longer accepts a tags filter
  - 'documents are filtered by tag through a tag: search query'
logic_claims:
  - CLAIM-5D71F667E27BE070
  - CLAIM-4F7758DB6D0AA04A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f42cb2071f21ef6158152d793f5d5d0a93ad9e934b7c25ce94c8c0cd6710a3f6
semantic_inventory:
  - claim_key: CLAIM-5D71F667E27BE070
    claim_text: The document list route no longer accepts a tags filter
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 55
    subjects:
      - documents.list_endpoint
  - claim_key: CLAIM-4F7758DB6D0AA04A
    claim_text: 'documents are filtered by tag through a tag: search query'
    role: descriptive
    status: modeled
    span:
      start: 57
      end: 114
    subjects:
      - documents.list_endpoint
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.0.0 changelog, #758: Removed the possibility to filter by tag in the `/api/organi'
  recorded_at: '2026-11-25T19:27:52.126Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:search
id: REQ-papra-documents-list-no-tag-filter
type: req
---
The document list route no longer accepts a tags filter; documents are filtered by tag through a tag: search query.

## Context

Reason not stated.

## Source

> Removed the possibility to filter by tag in the `/api/organizations/:organizationId/documents` route, use the `/api/organizations/:organizationId/documents/search` route instead. ```bash # Before: GET /api/organizations/:organizationId/documents?tags=yourTagId # After: GET /api/organizations/:organizationId/documents/search?query=tag:yourTagNameOrId ```

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.0.0 changelog, #758: Removed the possibility to filter by tag in the `/api/organi
