---
title: The /documents/search endpoint is removed; GET /api/organizations/:organizationId/documents takes an optional searchQuery and returns all documents when it i…
status: active
semantic_text: The /documents/search endpoint is removed; GET /api/organizations/:organizationId/documents takes an optional searchQuery and returns all documents when it is empty; the match count is returned as documentsCount, not totalCount.
semantic_clauses:
  - The /documents/search endpoint is removed
  - GET /api/organizations/:organizationId/documents takes an optional searchQuery and returns all documents when it is empty
  - the match count is returned as documentsCount, not totalCount
logic_claims:
  - CLAIM-B4B81C5A3DA307E8
  - CLAIM-324A14EE28679645
  - CLAIM-DF8804A31AF5988B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a0951ef71f63f94712ee3fc5aed72c0ea0f9eaafb06f4749f018176ff8ec48d7
semantic_inventory:
  - claim_key: CLAIM-B4B81C5A3DA307E8
    claim_text: The /documents/search endpoint is removed
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 41
    subjects:
      - documents.search_endpoint
  - claim_key: CLAIM-324A14EE28679645
    claim_text: GET /api/organizations/:organizationId/documents takes an optional searchQuery and returns all documents when it is empty
    role: normative
    status: modeled
    span:
      start: 43
      end: 164
    subjects:
      - documents.list_endpoint
  - claim_key: CLAIM-DF8804A31AF5988B
    claim_text: the match count is returned as documentsCount, not totalCount
    role: descriptive
    status: modeled
    span:
      start: 166
      end: 227
    subjects:
      - documents.list_endpoint
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.2.0 changelog, #899: Api breaking change: removed the `/api/organizations/:organi'
  recorded_at: '2026-11-16T13:17:53.699Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:search
id: REQ-papra-search-merged-into-documents-list
type: req
---
The /documents/search endpoint is removed; GET /api/organizations/:organizationId/documents takes an optional searchQuery and returns all documents when it is empty; the match count is returned as documentsCount, not totalCount.

## Context

Reason not stated.

## Why this changed

Reason not stated. The changeset of #899 (2026-02-16) replaces the earlier behaviour without saying why it changed.

## Source

> Api breaking change: removed the `/api/organizations/:organizationId/documents/search` endpoint in favor of the existing `/api/organizations/:organizationId/documents` with an optional `searchQuery` query parameter. The new `/api/organizations/:organizationId/documents` endpoint now behave as the old `/search` endpoint, with all documents being returned when `searchQuery` is empty. Note that the response field `totalCount` of the old `/search` endpoint has been renamed to `documentsCount` in the new endpoint. Before: ``` GET /api/organizations/:organizationId/documents/search?searchQuery=invoice&pageIndex=1&pageSize=20 Response: { documents: Document[]; totalCount: number; } GET /api/organizations/:organizationId/documents?pageIndex=1&pageSize=20 Response: { documents: Document[]; documentsCount: number; } ``` After: ``` GET /api/organizations/:organizationId/documents?searchQuery=invoice&pageIndex=1&pageSize=20 Response: { documents: Document[]; documentsCount: number; } ```

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.2.0 changelog, #899: Api breaking change: removed the `/api/organizations/:organi
