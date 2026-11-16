---
title: documents.sort sort_fields = createdAt_updatedAt_name_documentDate
status: deprecated
fact_kind: property_value
subject_key: documents.sort
property_key: sort_fields
operator: eq
value_type: string
value_string: createdAt_updatedAt_name_documentDate
claim_key: CLAIM-62EEE0716B11D745
claim_text: The document list accepts sortField (createdAt, updatedAt, name or documentDate) and sortOrder (asc or desc)
text_ref: REQ-papra-document-sort-parameters
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.4.1 changelog, #1089: Added `sortField` and `sortOrder` query parameters to the do'
  recorded_at: '2026-11-16T10:31:55.896Z'
id: FACT-papra-documents-sort-sort-fields
type: fact
---
The document list accepts sortField (createdAt, updatedAt, name or documentDate) and sortOrder (asc or desc).

Modeled from REQ-papra-document-sort-parameters so the claim can be checked for contradictions.
