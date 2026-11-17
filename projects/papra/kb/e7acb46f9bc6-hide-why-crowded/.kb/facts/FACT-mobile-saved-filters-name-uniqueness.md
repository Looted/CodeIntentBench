---
title: mobile.saved_filters name_uniqueness = unique ignoring letter case
status: active
fact_kind: property_value
subject_key: mobile.saved_filters
property_key: name_uniqueness
operator: eq
value_type: string
value_string: unique ignoring letter case
claim_key: CLAIM-16D4C25866D8460B
claim_text: Saved filters in the mobile app are unique per account regardless of letter case
text_ref: REQ-mobile-saved-filters-unique-ignoring-case
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-139'
  recorded_at: '2026-06-24T13:49:35.000Z'
id: FACT-mobile-saved-filters-name-uniqueness
type: fact
---
Saved filters in the mobile app are unique per account regardless of letter case.

Modeled from REQ-mobile-saved-filters-unique-ignoring-case so the claim can be checked for contradictions.
