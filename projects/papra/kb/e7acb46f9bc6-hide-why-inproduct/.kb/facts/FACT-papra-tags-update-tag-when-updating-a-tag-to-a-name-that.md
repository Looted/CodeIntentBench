---
title: tags.update_tag when_updating_a_tag_to_a_name_that = True
status: active
fact_kind: property_value
subject_key: tags.update_tag
property_key: when_updating_a_tag_to_a_name_that
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-57A963E0B2765B52
claim_text: When updating a tag to a name that already exists for the same organization, it throws an error
text_ref: REQ-papra-tags-updating-tag-to-name-that-already-exists
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1842'
  recorded_at: '2025-03-11T12:41:33.000Z'
id: FACT-papra-tags-update-tag-when-updating-a-tag-to-a-name-that
type: fact
---
When updating a tag to a name that already exists for the same organization, it throws an error.

Modeled from REQ-papra-tags-updating-tag-to-name-that-already-exists so the claim can be checked for contradictions.
