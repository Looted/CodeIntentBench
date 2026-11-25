---
title: tagging_rules.execution_order runs_after = content_extraction
status: active
fact_kind: property_value
subject_key: tagging_rules.execution_order
property_key: runs_after
operator: eq
value_type: string
value_string: content_extraction
claim_key: CLAIM-F277A2ECBBA8C3FA
claim_text: Tagging rules run on a new document only after its content has been extracted
text_ref: REQ-papra-tagging-rules-after-extraction
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 0.8.2 changelog, #461: Fix a regression bug that executed tagging rules before the'
  recorded_at: '2026-11-25T19:28:47.956Z'
id: FACT-papra-tagging-rules-execution-order-runs-after
type: fact
---
Tagging rules run on a new document only after its content has been extracted.

Modeled from REQ-papra-tagging-rules-after-extraction so the claim can be checked for contradictions.
