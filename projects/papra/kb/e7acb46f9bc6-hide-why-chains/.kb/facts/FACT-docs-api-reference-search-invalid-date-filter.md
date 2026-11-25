---
title: docs.api_reference_search invalid_date_filter = matches nothing
status: active
fact_kind: property_value
subject_key: docs.api_reference_search
property_key: invalid_date_filter
operator: eq
value_type: string
value_string: matches nothing
claim_key: CLAIM-9ED7FCED9DD730F6
claim_text: 'An invalid date in the since: filter of the API reference search makes the search return nothing'
text_ref: REQ-docs-api-reference-search-invalid-date
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-232'
  recorded_at: '2025-02-26T14:11:06.000Z'
id: FACT-docs-api-reference-search-invalid-date-filter
type: fact
---
An invalid date in the since: filter of the API reference search makes the search return nothing.

Modeled from REQ-docs-api-reference-search-invalid-date so the claim can be checked for contradictions.
