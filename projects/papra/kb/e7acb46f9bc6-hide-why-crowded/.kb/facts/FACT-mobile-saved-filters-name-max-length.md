---
title: mobile.saved_filters name_max_length = 40
status: active
fact_kind: property_value
subject_key: mobile.saved_filters
property_key: name_max_length
operator: eq
value_type: int
value_int: 40
claim_key: CLAIM-D46610E2641528E4
claim_text: Saved filter names in the mobile app are limited to 40 characters
text_ref: REQ-mobile-saved-filters-name-length
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-143'
  recorded_at: '2026-07-23T09:24:29.000Z'
id: FACT-mobile-saved-filters-name-max-length
type: fact
---
Saved filter names in the mobile app are limited to 40 characters.

Modeled from REQ-mobile-saved-filters-name-length so the claim can be checked for contradictions.
