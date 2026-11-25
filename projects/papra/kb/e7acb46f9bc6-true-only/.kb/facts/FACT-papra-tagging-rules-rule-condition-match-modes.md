---
title: tagging_rules.rule condition_match_modes = all_or_any
status: active
fact_kind: property_value
subject_key: tagging_rules.rule
property_key: condition_match_modes
operator: eq
value_type: string
value_string: all_or_any
claim_key: CLAIM-F396C964F5364501
claim_text: Each tagging rule chooses whether all of its conditions must match (AND) or any condition may match (OR)
text_ref: REQ-AUTO-E2E14D03456F8986
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra GitHub issues: #597'
  recorded_at: '2026-11-15T21:44:36.592Z'
id: FACT-papra-tagging-rules-rule-condition-match-modes
type: fact
---
Each tagging rule chooses whether all of its conditions must match (AND) or any condition may match (OR).

Modeled from REQ-AUTO-E2E14D03456F8986 so the claim can be checked for contradictions.
