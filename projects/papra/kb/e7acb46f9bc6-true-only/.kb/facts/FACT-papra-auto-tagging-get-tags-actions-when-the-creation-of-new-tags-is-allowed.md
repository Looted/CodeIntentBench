---
title: auto_tagging.get_tags_actions when_the_creation_of_new_tags_is_allowed = True
status: active
fact_kind: property_value
subject_key: auto_tagging.get_tags_actions
property_key: when_the_creation_of_new_tags_is_allowed
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-568D5770748CA675
claim_text: When the creation of new tags is allowed and there are no existing tags, the prediction returns an array of new tags
text_ref: REQ-papra-auto-tagging-creation-of-new-tags-is-allowed-and
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-572'
  recorded_at: '2025-08-01T14:52:16.000Z'
id: FACT-papra-auto-tagging-get-tags-actions-when-the-creation-of-new-tags-is-allowed
type: fact
---
When the creation of new tags is allowed and there are no existing tags, the prediction returns an array of new tags.

Modeled from REQ-papra-auto-tagging-creation-of-new-tags-is-allowed-and so the claim can be checked for contradictions.
