---
title: mobile.mobile_app_offline_search query_min_length = 3
status: active
fact_kind: property_value
subject_key: mobile.mobile_app_offline_search
property_key: query_min_length
operator: eq
value_type: int
value_int: 3
claim_key: CLAIM-ACC89C8E3044FDCF
claim_text: The mobile app's offline search runs only once the query has at least 3 characters
text_ref: REQ-mobile-mobile-app-offline-search-minimum-length
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-214'
  recorded_at: '2025-03-09T14:12:56.000Z'
id: FACT-mobile-mobile-app-offline-search-query-min-length
type: fact
---
The mobile app's offline search runs only once the query has at least 3 characters.

Modeled from REQ-mobile-mobile-app-offline-search-minimum-length so the claim can be checked for contradictions.
