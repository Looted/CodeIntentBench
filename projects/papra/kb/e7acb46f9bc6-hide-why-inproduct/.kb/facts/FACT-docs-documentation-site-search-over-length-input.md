---
title: docs.documentation_site_search over_length_input = rejected
status: active
fact_kind: property_value
subject_key: docs.documentation_site_search
property_key: over_length_input
operator: eq
value_type: string
value_string: rejected
claim_key: CLAIM-778F39B5CA222673
claim_text: longer input is rejected with a validation error
text_ref: REQ-docs-documentation-site-search-query-length
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-145'
  recorded_at: '2025-05-13T15:24:41.000Z'
id: FACT-docs-documentation-site-search-over-length-input
type: fact
---
Longer input is rejected with a validation error.

Modeled from REQ-docs-documentation-site-search-query-length so the claim can be checked for contradictions.
