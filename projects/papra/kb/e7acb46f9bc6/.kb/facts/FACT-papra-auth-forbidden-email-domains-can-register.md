---
title: auth.forbidden_email_domains can_register = False
status: active
fact_kind: property_value
subject_key: auth.forbidden_email_domains
property_key: can_register
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-2CC270A6A7176569
claim_text: Email domains listed in AUTH_FORBIDDEN_EMAIL_DOMAINS cannot register
text_ref: REQ-papra-forbidden-email-domains
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 25.11.0 changelog, #638: Added the possibility to filter out some email domain names'
  recorded_at: '2026-11-16T10:24:53.544Z'
id: FACT-papra-auth-forbidden-email-domains-can-register
type: fact
---
Email domains listed in AUTH_FORBIDDEN_EMAIL_DOMAINS cannot register.

Modeled from REQ-papra-forbidden-email-domains so the claim can be checked for contradictions.
