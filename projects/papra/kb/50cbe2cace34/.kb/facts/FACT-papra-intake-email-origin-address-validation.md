---
title: intake_email.origin_address validation = rfc5322
status: active
fact_kind: property_value
subject_key: intake_email.origin_address
property_key: validation
operator: eq
value_type: string
value_string: rfc5322
claim_key: CLAIM-66417545FB775BB6
claim_text: Intake email webhook addresses are validated as RFC 5322 addresses, not just simple emails
text_ref: REQ-papra-intake-addresses-rfc5322
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 25.10.1 changelog, #548: Made the validation more permissive for incoming intake emai'
  recorded_at: '2026-11-16T10:36:06.509Z'
id: FACT-papra-intake-email-origin-address-validation
type: fact
---
Intake email webhook addresses are validated as RFC 5322 addresses, not just simple emails.

Modeled from REQ-papra-intake-addresses-rfc5322 so the claim can be checked for contradictions.
