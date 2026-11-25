---
title: documents.list_endpoint tag_filtering_via = tag_search_filter
status: active
fact_kind: property_value
subject_key: documents.list_endpoint
property_key: tag_filtering_via
operator: eq
value_type: string
value_string: tag_search_filter
claim_key: CLAIM-4F7758DB6D0AA04A
claim_text: 'documents are filtered by tag through a tag: search query'
text_ref: REQ-papra-documents-list-no-tag-filter
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.0.0 changelog, #758: Removed the possibility to filter by tag in the `/api/organi'
  recorded_at: '2026-11-25T19:27:51.297Z'
id: FACT-papra-documents-list-endpoint-tag-filtering-via
type: fact
---
Documents are filtered by tag through a tag: search query.

Modeled from REQ-papra-documents-list-no-tag-filter so the claim can be checked for contradictions.
