---
title: mobile.saved_filters empty_name_refused = True
status: active
fact_kind: property_value
subject_key: mobile.saved_filters
property_key: empty_name_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-70D5F8163A64221A
claim_text: a name that is empty after trimming is refused
text_ref: REQ-mobile-saved-filters-names-trimmed
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-144'
  recorded_at: '2025-08-15T13:22:48.000Z'
id: FACT-mobile-saved-filters-empty-name-refused
type: fact
---
A name that is empty after trimming is refused.

Modeled from REQ-mobile-saved-filters-names-trimmed so the claim can be checked for contradictions.
