---
title: mobile.mobile_app_offline_search query_max_length = 256
status: active
fact_kind: property_value
subject_key: mobile.mobile_app_offline_search
property_key: query_max_length
operator: eq
value_type: int
value_int: 256
claim_key: CLAIM-53FDE15815620D88
claim_text: A query in the mobile app's offline search is limited to 256 characters
text_ref: REQ-mobile-mobile-app-offline-search-query-length
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-205'
  recorded_at: '2026-09-12T12:15:32.000Z'
id: FACT-mobile-mobile-app-offline-search-query-max-length
type: fact
---
A query in the mobile app's offline search is limited to 256 characters.

Modeled from REQ-mobile-mobile-app-offline-search-query-length so the claim can be checked for contradictions.
