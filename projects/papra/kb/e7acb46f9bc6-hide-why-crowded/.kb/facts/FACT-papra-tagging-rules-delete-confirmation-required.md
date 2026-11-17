---
title: tagging_rules.delete_confirmation required = True
status: active
fact_kind: property_value
subject_key: tagging_rules.delete_confirmation
property_key: required
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-7CD19CD04322C96F
claim_text: Deleting a tagging rule asks for confirmation first
text_ref: REQ-papra-tagging-rule-delete-confirmation
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.6.2 changelog, #1407: Added a deletion confirmation modal when deleting a tagging'
  recorded_at: '2026-11-16T13:19:14.926Z'
id: FACT-papra-tagging-rules-delete-confirmation-required
type: fact
---
Deleting a tagging rule asks for confirmation first.

Modeled from REQ-papra-tagging-rule-delete-confirmation so the claim can be checked for contradictions.
