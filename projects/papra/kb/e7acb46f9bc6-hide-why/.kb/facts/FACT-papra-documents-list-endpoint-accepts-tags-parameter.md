---
title: documents.list_endpoint accepts_tags_parameter = False
status: active
fact_kind: property_value
subject_key: documents.list_endpoint
property_key: accepts_tags_parameter
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-5D71F667E27BE070
claim_text: The document list route no longer accepts a tags filter
text_ref: REQ-papra-documents-list-no-tag-filter
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.0.0 changelog, #758: Removed the possibility to filter by tag in the `/api/organi'
  recorded_at: '2026-11-16T13:17:48.255Z'
id: FACT-papra-documents-list-endpoint-accepts-tags-parameter
type: fact
---
The document list route no longer accepts a tags filter.

Modeled from REQ-papra-documents-list-no-tag-filter so the claim can be checked for contradictions.
