---
title: tagging_rules.apply_tagging_rules when_conditionmatchmode_is_any_tags_are_applied_when = True
status: active
fact_kind: property_value
subject_key: tagging_rules.apply_tagging_rules
property_key: when_conditionmatchmode_is_any_tags_are_applied_when
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-0BF102005290808C
claim_text: When conditionMatchMode is "any", tags are applied when at least one condition matches
text_ref: REQ-papra-tagging-rules-conditionmatchmode-is-any-tags-are-applied-when
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1826'
  recorded_at: '2025-05-06T17:01:48.000Z'
id: FACT-papra-tagging-rules-apply-tagging-rules-when-conditionmatchmode-is-any-tags-are-applied-when
type: fact
---
When conditionMatchMode is "any", tags are applied when at least one condition matches.

Modeled from REQ-papra-tagging-rules-conditionmatchmode-is-any-tags-are-applied-when so the claim can be checked for contradictions.
