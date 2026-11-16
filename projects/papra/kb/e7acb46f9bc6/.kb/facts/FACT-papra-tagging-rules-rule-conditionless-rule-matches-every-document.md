---
title: tagging_rules.rule conditionless_rule_matches_every_document = True
status: active
fact_kind: property_value
subject_key: tagging_rules.rule
property_key: conditionless_rule_matches_every_document
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-0A4AC738604BBD43
claim_text: A rule with no conditions always matches and tags every incoming document
text_ref: REQ-papra-tagging-rule-match-mode
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): tagging-rules/tagging-rules.usecases.test.ts#tagging-rule-match-mode'
  recorded_at: '2026-11-16T10:19:22.070Z'
id: FACT-papra-tagging-rules-rule-conditionless-rule-matches-every-document
type: fact
---
A rule with no conditions always matches and tags every incoming document.

Modeled from REQ-papra-tagging-rule-match-mode so the claim can be checked for contradictions.
