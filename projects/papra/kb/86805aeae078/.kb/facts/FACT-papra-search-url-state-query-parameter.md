---
title: search.url_state query_parameter = query
status: active
fact_kind: property_value
subject_key: search.url_state
property_key: query_parameter
operator: eq
value_type: string
value_string: query
claim_key: CLAIM-3A63F8E3B32BA4AC
claim_text: The documents page keeps the current search in the URL as the query parameter (/organizations/:orgId/documents?query=...)
text_ref: REQ-the-documents-page-keeps-the-current-searc-F4067AA3
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra GitHub issues: #743'
  recorded_at: '2026-11-15T21:51:10.605Z'
id: FACT-papra-search-url-state-query-parameter
type: fact
---
The documents page keeps the current search in the URL as the query parameter (/organizations/:orgId/documents?query=...).

Modeled from REQ-the-documents-page-keeps-the-current-searc-F4067AA3 so the claim can be checked for contradictions.
