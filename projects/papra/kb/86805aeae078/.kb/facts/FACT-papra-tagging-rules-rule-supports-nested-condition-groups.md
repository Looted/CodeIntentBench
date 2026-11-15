---
title: tagging_rules.rule supports_nested_condition_groups = False
status: active
fact_kind: property_value
subject_key: tagging_rules.rule
property_key: supports_nested_condition_groups
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-4AA704DCFF0FE729
claim_text: nested condition groups are not supported
text_ref: REQ-AUTO-E2E14D03456F8986
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra GitHub issues: #597'
  recorded_at: '2026-11-15T21:49:45.902Z'
id: FACT-papra-tagging-rules-rule-supports-nested-condition-groups
type: fact
---
Nested condition groups are not supported.

Modeled from REQ-AUTO-E2E14D03456F8986 so the claim can be checked for contradictions.
