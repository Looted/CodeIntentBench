---
title: mobile.mobile_app_offline_search over_length_input = truncated
status: active
fact_kind: property_value
subject_key: mobile.mobile_app_offline_search
property_key: over_length_input
operator: eq
value_type: string
value_string: truncated
claim_key: CLAIM-7ABD8CACE2C520A4
claim_text: longer input is cut to the limit without an error
text_ref: REQ-mobile-mobile-app-offline-search-query-length
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-205'
  recorded_at: '2026-09-12T12:15:32.000Z'
id: FACT-mobile-mobile-app-offline-search-over-length-input
type: fact
---
Longer input is cut to the limit without an error.

Modeled from REQ-mobile-mobile-app-offline-search-query-length so the claim can be checked for contradictions.
