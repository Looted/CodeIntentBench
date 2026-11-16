---
title: documents.search_endpoint result_fields = id_and_name
status: deprecated
fact_kind: property_value
subject_key: documents.search_endpoint
property_key: result_fields
operator: eq
value_type: string
value_string: id_and_name
claim_key: CLAIM-E1C5AA855DDF24D3
claim_text: each result carries only the document id and name
text_ref: REQ-papra-search-endpoint-nested-results
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 25.11.0 changelog, #650: Api breaking change: the document search endpoint return for'
  recorded_at: '2026-11-16T10:31:41.298Z'
id: FACT-papra-documents-search-endpoint-result-fields-v1
type: fact
---
Each result carries only the document id and name.

Modeled from REQ-papra-search-endpoint-nested-results so the claim can be checked for contradictions.
