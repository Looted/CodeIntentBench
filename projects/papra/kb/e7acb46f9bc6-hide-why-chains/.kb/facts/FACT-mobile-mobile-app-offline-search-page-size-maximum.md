---
title: mobile.mobile_app_offline_search page_size_maximum = 10
status: active
fact_kind: property_value
subject_key: mobile.mobile_app_offline_search
property_key: page_size_maximum
operator: eq
value_type: int
value_int: 10
claim_key: CLAIM-14BC33126927F58D
claim_text: The mobile app's offline search returns at most 10 results per page
text_ref: REQ-mobile-mobile-app-offline-search-page-size
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-215'
  recorded_at: '2026-01-13T08:14:07.000Z'
id: FACT-mobile-mobile-app-offline-search-page-size-maximum
type: fact
---
The mobile app's offline search returns at most 10 results per page.

Modeled from REQ-mobile-mobile-app-offline-search-page-size so the claim can be checked for contradictions.
