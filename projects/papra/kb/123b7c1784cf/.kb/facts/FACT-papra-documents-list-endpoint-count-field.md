---
title: documents.list_endpoint count_field = documentsCount
status: active
fact_kind: property_value
subject_key: documents.list_endpoint
property_key: count_field
operator: eq
value_type: string
value_string: documentsCount
claim_key: CLAIM-DF8804A31AF5988B
claim_text: the match count is returned as documentsCount, not totalCount
text_ref: REQ-papra-search-merged-into-documents-list
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.2.0 changelog, #899: Api breaking change: removed the `/api/organizations/:organi'
  recorded_at: '2026-11-25T19:27:55.190Z'
id: FACT-papra-documents-list-endpoint-count-field
type: fact
---
The match count is returned as documentsCount, not totalCount.

Modeled from REQ-papra-search-merged-into-documents-list so the claim can be checked for contradictions.
