---
title: auto_tagging.get_tags_actions when_the_creation_of_new_tags_is_not = True
status: active
fact_kind: property_value
subject_key: auto_tagging.get_tags_actions
property_key: when_the_creation_of_new_tags_is_not
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-30F9B10D380F57C9
claim_text: When the creation of new tags is not allowed and there are existing tags, the prediction returns an array of existing tags name
text_ref: REQ-papra-auto-tagging-creation-of-new-tags-is-not-allowed
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-573'
  recorded_at: '2026-03-08T09:57:07.000Z'
id: FACT-papra-auto-tagging-get-tags-actions-when-the-creation-of-new-tags-is-not
type: fact
---
When the creation of new tags is not allowed and there are existing tags, the prediction returns an array of existing tags name.

Modeled from REQ-papra-auto-tagging-creation-of-new-tags-is-not-allowed so the claim can be checked for contradictions.
