---
title: search.filter.created invalid_date_handling = ignored
status: active
fact_kind: property_value
subject_key: search.filter.created
property_key: invalid_date_handling
operator: eq
value_type: string
value_string: ignored
claim_key: CLAIM-86C7067477F49112
claim_text: 'An invalid date in a created: filter is ignored rather than failing the whole search query'
text_ref: REQ-an-invalid-date-in-a-created-filter-is-ign-800EF0B8
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra documentation site (apps/docs): 03-guides/08-advanced-search.mdx#invalid-dates'
  recorded_at: '2026-11-15T21:45:03.394Z'
id: FACT-papra-search-filter-created-invalid-date-handling
type: fact
---
An invalid date in a created: filter is ignored rather than failing the whole search query.

Modeled from REQ-an-invalid-date-in-a-created-filter-is-ign-800EF0B8 so the claim can be checked for contradictions.
