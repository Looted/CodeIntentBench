---
title: auto_tagging.get_tags_actions should_not_happen_because_of_guards_but_when = True
status: active
fact_kind: property_value
subject_key: auto_tagging.get_tags_actions
property_key: should_not_happen_because_of_guards_but_when
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-BDC479418C650C87
claim_text: Should not happen because of guards, but when the creation of new tags is not allowed and there are no existing tags, the prediction returns an empty array
text_ref: REQ-papra-auto-tagging-should-not-happen-because-of-guards-but
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-570'
  recorded_at: '2025-04-19T13:48:04.000Z'
id: FACT-papra-auto-tagging-get-tags-actions-should-not-happen-because-of-guards-but-when
type: fact
---
Should not happen because of guards, but when the creation of new tags is not allowed and there are no existing tags, the prediction returns an empty array.

Modeled from REQ-papra-auto-tagging-should-not-happen-because-of-guards-but so the claim can be checked for contradictions.
