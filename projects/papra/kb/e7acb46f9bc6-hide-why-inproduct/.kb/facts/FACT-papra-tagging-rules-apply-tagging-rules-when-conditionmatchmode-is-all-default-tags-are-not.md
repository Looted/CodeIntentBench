---
title: tagging_rules.apply_tagging_rules when_conditionmatchmode_is_all_default_tags_are_not = True
status: active
fact_kind: property_value
subject_key: tagging_rules.apply_tagging_rules
property_key: when_conditionmatchmode_is_all_default_tags_are_not
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-446BDED1EFB6C429
claim_text: When conditionMatchMode is "all" (default), tags are not applied when only some conditions match
text_ref: REQ-papra-tagging-rules-conditionmatchmode-is-all-default-tags-are-not
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1824'
  recorded_at: '2026-09-28T10:10:52.000Z'
id: FACT-papra-tagging-rules-apply-tagging-rules-when-conditionmatchmode-is-all-default-tags-are-not
type: fact
---
When conditionMatchMode is "all" (default), tags are not applied when only some conditions match.

Modeled from REQ-papra-tagging-rules-conditionmatchmode-is-all-default-tags-are-not so the claim can be checked for contradictions.
