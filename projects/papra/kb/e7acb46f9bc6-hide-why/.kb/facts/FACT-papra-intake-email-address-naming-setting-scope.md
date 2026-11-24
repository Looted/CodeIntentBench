---
title: intake_email.address naming_setting_scope = instance
status: active
fact_kind: property_value
subject_key: intake_email.address
property_key: naming_setting_scope
operator: eq
value_type: string
value_string: instance
claim_key: CLAIM-6BF3A84944A148E5
claim_text: an instance-level setting, INTAKE_EMAILS_USERNAME_DRIVER=pattern
text_ref: REQ-intake-email-addresses-can-follow-a-config-6227A38D
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra GitHub issues: #486'
  recorded_at: '2026-11-15T21:45:38.304Z'
id: FACT-papra-intake-email-address-naming-setting-scope
type: fact
---
An instance-level setting, INTAKE_EMAILS_USERNAME_DRIVER=pattern.

Modeled from REQ-intake-email-addresses-can-follow-a-config-6227A38D so the claim can be checked for contradictions.
