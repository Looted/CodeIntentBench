---
title: intake_email.address pattern_naming_available = True
status: active
fact_kind: property_value
subject_key: intake_email.address
property_key: pattern_naming_available
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-677C758B72971D22
claim_text: Intake email addresses can follow a configured naming pattern instead of the randomly generated names
text_ref: REQ-intake-email-addresses-can-follow-a-config-6227A38D
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra GitHub issues: #486'
  recorded_at: '2026-11-15T21:50:33.787Z'
id: FACT-papra-intake-email-address-pattern-naming-available
type: fact
---
Intake email addresses can follow a configured naming pattern instead of the randomly generated names.

Modeled from REQ-intake-email-addresses-can-follow-a-config-6227A38D so the claim can be checked for contradictions.
