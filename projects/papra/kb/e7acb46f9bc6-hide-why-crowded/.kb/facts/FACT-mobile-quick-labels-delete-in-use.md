---
title: mobile.quick_labels delete_in_use = refused
status: active
fact_kind: property_value
subject_key: mobile.quick_labels
property_key: delete_in_use
operator: eq
value_type: string
value_string: refused
claim_key: CLAIM-F7113409812A3CEC
claim_text: Deleting a quick label in the mobile app that is still in use is refused until nothing refers to it
text_ref: REQ-mobile-quick-labels-delete-in-use
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-176'
  recorded_at: '2026-03-25T11:11:16.000Z'
id: FACT-mobile-quick-labels-delete-in-use
type: fact
---
Deleting a quick label in the mobile app that is still in use is refused until nothing refers to it.

Modeled from REQ-mobile-quick-labels-delete-in-use so the claim can be checked for contradictions.
