---
title: search.date_filter available = True
status: active
fact_kind: property_value
subject_key: search.date_filter
property_key: available
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-3223A2774D70DF5F
claim_text: 'The date: filter selects documents by document date (date:>2026) and has:date by its presence'
text_ref: REQ-papra-date-search-filter
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.3.0 changelog, #945: Added the `date` search filter, allowing to filter by docume'
  recorded_at: '2026-11-16T10:21:20.100Z'
id: FACT-papra-search-date-filter-available
type: fact
---
The date: filter selects documents by document date (date:>2026) and has:date by its presence.

Modeled from REQ-papra-date-search-filter so the claim can be checked for contradictions.
