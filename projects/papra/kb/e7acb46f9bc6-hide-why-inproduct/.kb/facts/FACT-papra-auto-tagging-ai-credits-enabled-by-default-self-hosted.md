---
title: auto_tagging.ai_credits enabled_by_default_self_hosted = False
status: active
fact_kind: property_value
subject_key: auto_tagging.ai_credits
property_key: enabled_by_default_self_hosted
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-CE526FE7184ACF04
claim_text: AI credit accounting is disabled by default on self-hosted instances
text_ref: REQ-papra-ai-credits-off-self-hosted
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.7.0 changelog, #1511: Fully disabled AI credit accounting by default for self-host'
  recorded_at: '2026-11-16T13:19:26.470Z'
id: FACT-papra-auto-tagging-ai-credits-enabled-by-default-self-hosted
type: fact
---
AI credit accounting is disabled by default on self-hosted instances.

Modeled from REQ-papra-ai-credits-off-self-hosted so the claim can be checked for contradictions.
