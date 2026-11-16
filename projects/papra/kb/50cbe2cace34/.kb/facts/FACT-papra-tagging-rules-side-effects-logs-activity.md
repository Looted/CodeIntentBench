---
title: tagging_rules.side_effects logs_activity = True
status: active
fact_kind: property_value
subject_key: tagging_rules.side_effects
property_key: logs_activity
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-9AA4EBF40267F445
claim_text: A tag added by a tagging rule is recorded in the document activity log
text_ref: REQ-papra-auto-tagging-logs-activity
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 25.10.0 changelog, #538: Save document activity log when auto tagging rule is applied'
  recorded_at: '2026-11-16T10:33:03.323Z'
id: FACT-papra-tagging-rules-side-effects-logs-activity
type: fact
---
A tag added by a tagging rule is recorded in the document activity log.

Modeled from REQ-papra-auto-tagging-logs-activity so the claim can be checked for contradictions.
