---
title: intake_email.webhook_secret has_default_value = True
status: deprecated
fact_kind: property_value
subject_key: intake_email.webhook_secret
property_key: has_default_value
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-E5FACB551212D89B
claim_text: a default value, please-change-me, stays in place and itself satisfies the rule
text_ref: REQ-papra-intake-webhook-secret-length
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra merged pull requests: #892'
  recorded_at: '2026-11-15T22:59:50.040Z'
id: FACT-papra-intake-email-webhook-secret-has-default-value
type: fact
---
A default value, please-change-me, stays in place and itself satisfies the rule.

Modeled from REQ-papra-intake-webhook-secret-length so the claim can be checked for contradictions.
