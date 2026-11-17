---
title: mobile.quick_labels empty_name_refused = True
status: active
fact_kind: property_value
subject_key: mobile.quick_labels
property_key: empty_name_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-70D5F8163A64221A
claim_text: a name that is empty after trimming is refused
text_ref: REQ-mobile-quick-labels-names-trimmed
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-166'
  recorded_at: '2025-03-13T17:16:40.000Z'
id: FACT-mobile-quick-labels-empty-name-refused
type: fact
---
A name that is empty after trimming is refused.

Modeled from REQ-mobile-quick-labels-names-trimmed so the claim can be checked for contradictions.
