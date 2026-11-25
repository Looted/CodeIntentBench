---
title: mobile.mobile_app_offline_search invalid_date_filter = ignored
status: active
fact_kind: property_value
subject_key: mobile.mobile_app_offline_search
property_key: invalid_date_filter
operator: eq
value_type: string
value_string: ignored
claim_key: CLAIM-00927D29374E27F1
claim_text: 'An invalid date in the scanned: filter of the mobile app''s offline search is ignored and the other filters still apply'
text_ref: REQ-mobile-mobile-app-offline-search-invalid-date
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-210'
  recorded_at: '2026-06-24T17:25:27.000Z'
id: FACT-mobile-mobile-app-offline-search-invalid-date-filter
type: fact
---
An invalid date in the scanned: filter of the mobile app's offline search is ignored and the other filters still apply.

Modeled from REQ-mobile-mobile-app-offline-search-invalid-date so the claim can be checked for contradictions.
