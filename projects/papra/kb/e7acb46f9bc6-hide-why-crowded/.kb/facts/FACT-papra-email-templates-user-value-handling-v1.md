---
title: email.templates user_value_handling = sanitized
status: deprecated
fact_kind: property_value
subject_key: email.templates
property_key: user_value_handling
operator: eq
value_type: string
value_string: sanitized
claim_key: CLAIM-83340C21B5B77C60
claim_text: The user's name is sanitized before it is put in email content
text_ref: REQ-papra-email-user-name-sanitized
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.4.0 changelog, #995: Properly sanitize user name before including it in the email'
  recorded_at: '2026-11-16T13:20:59.567Z'
id: FACT-papra-email-templates-user-value-handling-v1
type: fact
---
The user's name is sanitized before it is put in email content.

Modeled from REQ-papra-email-user-name-sanitized so the claim can be checked for contradictions.
