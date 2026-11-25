---
title: docs.documentation_site_search query_min_length = 2
status: active
fact_kind: property_value
subject_key: docs.documentation_site_search
property_key: query_min_length
operator: eq
value_type: int
value_int: 2
claim_key: CLAIM-2B658C68EC492173
claim_text: The documentation site search runs only once the query has at least 2 characters
text_ref: REQ-docs-documentation-site-search-minimum-length
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-210'
  recorded_at: '2026-05-18T14:48:49.000Z'
id: FACT-docs-documentation-site-search-query-min-length
type: fact
---
The documentation site search runs only once the query has at least 2 characters.

Modeled from REQ-docs-documentation-site-search-minimum-length so the claim can be checked for contradictions.
