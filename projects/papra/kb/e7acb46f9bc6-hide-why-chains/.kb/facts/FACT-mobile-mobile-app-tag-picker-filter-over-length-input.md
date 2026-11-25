---
title: mobile.mobile_app_tag_picker_filter over_length_input = truncated
status: active
fact_kind: property_value
subject_key: mobile.mobile_app_tag_picker_filter
property_key: over_length_input
operator: eq
value_type: string
value_string: truncated
claim_key: CLAIM-7ABD8CACE2C520A4
claim_text: longer input is cut to the limit without an error
text_ref: REQ-mobile-mobile-app-tag-picker-filter-query-length
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-232'
  recorded_at: '2026-05-01T14:33:51.000Z'
id: FACT-mobile-mobile-app-tag-picker-filter-over-length-input
type: fact
---
Longer input is cut to the limit without an error.

Modeled from REQ-mobile-mobile-app-tag-picker-filter-query-length so the claim can be checked for contradictions.
