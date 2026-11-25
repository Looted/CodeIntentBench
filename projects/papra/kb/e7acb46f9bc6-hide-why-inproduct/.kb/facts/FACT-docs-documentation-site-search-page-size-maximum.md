---
title: docs.documentation_site_search page_size_maximum = 25
status: active
fact_kind: property_value
subject_key: docs.documentation_site_search
property_key: page_size_maximum
operator: eq
value_type: int
value_int: 25
claim_key: CLAIM-A267D95F50F037D4
claim_text: The documentation site search returns at most 25 results per page
text_ref: REQ-docs-documentation-site-search-page-size
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-158'
  recorded_at: '2026-09-26T08:50:58.000Z'
id: FACT-docs-documentation-site-search-page-size-maximum
type: fact
---
The documentation site search returns at most 25 results per page.

Modeled from REQ-docs-documentation-site-search-page-size so the claim can be checked for contradictions.
