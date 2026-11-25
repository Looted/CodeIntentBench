---
title: tagging_rules.side_effects triggers_tag_added_webhook = True
status: active
fact_kind: property_value
subject_key: tagging_rules.side_effects
property_key: triggers_tag_added_webhook
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-0103C775B8B5F5CE
claim_text: it triggers the document:tag:added webhook
text_ref: REQ-papra-auto-tagging-logs-activity
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 25.10.0 changelog, #538: Save document activity log when auto tagging rule is applied'
  recorded_at: '2026-11-16T13:19:11.489Z'
id: FACT-papra-tagging-rules-side-effects-triggers-tag-added-webhook
type: fact
---
It triggers the document:tag:added webhook.

Modeled from REQ-papra-auto-tagging-logs-activity so the claim can be checked for contradictions.
