---
title: search.custom_property_filters available = True
status: active
fact_kind: property_value
subject_key: search.custom_property_filters
property_key: available
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-E5916E57A9B76E20
claim_text: Documents can be searched by custom property value (status:todo) and by presence (has:status, -has:status)
text_ref: REQ-papra-custom-property-search-filters
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.3.0 changelog, #965: Added support for searching by custom properties. For exampl'
  recorded_at: '2026-11-16T10:21:14.422Z'
id: FACT-papra-search-custom-property-filters-available
type: fact
---
Documents can be searched by custom property value (status:todo) and by presence (has:status, -has:status).

Modeled from REQ-papra-custom-property-search-filters so the claim can be checked for contradictions.
