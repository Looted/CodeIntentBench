---
title: billing.manage_subscription enabled_by_default = False
status: active
fact_kind: property_value
subject_key: billing.manage_subscription
property_key: enabled_by_default
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-9706ABA6D9C2E96A
claim_text: The Manage subscription action in organization settings is disabled by default
text_ref: REQ-papra-manage-subscription-off-by-default
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 0.6.0 changelog, #309: Disable "Manage subscription" from organization setting by d'
  recorded_at: '2026-11-16T10:35:34.828Z'
id: FACT-papra-billing-manage-subscription-enabled-by-default
type: fact
---
The Manage subscription action in organization settings is disabled by default.

Modeled from REQ-papra-manage-subscription-off-by-default so the claim can be checked for contradictions.
