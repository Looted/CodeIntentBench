---
title: docs.documentation_site_search query_max_length = 500
status: active
fact_kind: property_value
subject_key: docs.documentation_site_search
property_key: query_max_length
operator: eq
value_type: int
value_int: 500
claim_key: CLAIM-B1DD57FFC7297E6C
claim_text: A query in the documentation site search is limited to 500 characters
text_ref: REQ-docs-documentation-site-search-query-length
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-198'
  recorded_at: '2025-05-13T15:24:41.000Z'
id: FACT-docs-documentation-site-search-query-max-length
type: fact
---
A query in the documentation site search is limited to 500 characters.

Modeled from REQ-docs-documentation-site-search-query-length so the claim can be checked for contradictions.
