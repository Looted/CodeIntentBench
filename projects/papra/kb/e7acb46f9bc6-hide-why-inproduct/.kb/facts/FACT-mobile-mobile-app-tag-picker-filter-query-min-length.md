---
title: mobile.mobile_app_tag_picker_filter query_min_length = 2
status: active
fact_kind: property_value
subject_key: mobile.mobile_app_tag_picker_filter
property_key: query_min_length
operator: eq
value_type: int
value_int: 2
claim_key: CLAIM-92A7CE70AD4CC0A4
claim_text: The mobile app's tag picker filter runs only once the query has at least 2 characters
text_ref: REQ-mobile-mobile-app-tag-picker-filter-minimum-length
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-173'
  recorded_at: '2025-09-21T15:09:10.000Z'
id: FACT-mobile-mobile-app-tag-picker-filter-query-min-length
type: fact
---
The mobile app's tag picker filter runs only once the query has at least 2 characters.

Modeled from REQ-mobile-mobile-app-tag-picker-filter-minimum-length so the claim can be checked for contradictions.
