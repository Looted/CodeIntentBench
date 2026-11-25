---
title: tagging_rules.apply_tagging_rules when_conditionmatchmode_is_all_default_tags_are_applied = True
status: active
fact_kind: property_value
subject_key: tagging_rules.apply_tagging_rules
property_key: when_conditionmatchmode_is_all_default_tags_are_applied
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-94CC1797685010B8
claim_text: When conditionMatchMode is "all" (default), tags are applied only when all conditions match
text_ref: REQ-papra-tagging-rules-conditionmatchmode-is-all-default-tags-are-applied
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1823'
  recorded_at: '2026-05-07T14:57:47.000Z'
id: FACT-papra-tagging-rules-apply-tagging-rules-when-conditionmatchmode-is-all-default-tags-are-applied
type: fact
---
When conditionMatchMode is "all" (default), tags are applied only when all conditions match.

Modeled from REQ-papra-tagging-rules-conditionmatchmode-is-all-default-tags-are-applied so the claim can be checked for contradictions.
