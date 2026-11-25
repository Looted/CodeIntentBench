---
title: tagging_rules.rule default_condition_match_mode = all
status: active
fact_kind: property_value
subject_key: tagging_rules.rule
property_key: default_condition_match_mode
operator: eq
value_type: string
value_string: all
claim_key: CLAIM-E38AEB914C491E43
claim_text: 'A tagging rule applies its tags only when its conditions match according to its match mode: "all" (the default) requires every condition to match'
text_ref: REQ-papra-tagging-rule-match-mode
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): tagging-rules/tagging-rules.usecases.test.ts#tagging-rule-match-mode'
  recorded_at: '2026-11-25T19:26:46.840Z'
id: FACT-papra-tagging-rules-rule-default-condition-match-mode
type: fact
---
A tagging rule applies its tags only when its conditions match according to its match mode: "all" (the default) requires every condition to match.

Modeled from REQ-papra-tagging-rule-match-mode so the claim can be checked for contradictions.
