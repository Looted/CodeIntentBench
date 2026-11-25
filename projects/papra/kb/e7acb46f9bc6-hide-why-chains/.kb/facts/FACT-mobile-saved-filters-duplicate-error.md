---
title: mobile.saved_filters duplicate_error = saved-filter-already-exists
status: active
fact_kind: property_value
subject_key: mobile.saved_filters
property_key: duplicate_error
operator: eq
value_type: string
value_string: saved-filter-already-exists
claim_key: CLAIM-6A950AEF5A6611C2
claim_text: a duplicate is reported as saved-filter-already-exists
text_ref: REQ-mobile-saved-filters-unique-ignoring-case
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-139'
  recorded_at: '2026-06-24T13:49:35.000Z'
id: FACT-mobile-saved-filters-duplicate-error
type: fact
---
A duplicate is reported as saved-filter-already-exists.

Modeled from REQ-mobile-saved-filters-unique-ignoring-case so the claim can be checked for contradictions.
