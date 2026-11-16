---
title: email.templates user_value_handling = escaped
status: active
fact_kind: property_value
subject_key: email.templates
property_key: user_value_handling
operator: eq
value_type: string
value_string: escaped
claim_key: CLAIM-12C436CCA4159D42
claim_text: HTML-like characters in email templates are escaped, not removed
text_ref: REQ-papra-email-html-escaped
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.4.1 changelog, #1061: Html-ish characters in email templates are now escaped inste'
  recorded_at: '2026-11-16T10:34:48.798Z'
id: FACT-papra-email-templates-user-value-handling
type: fact
---
HTML-like characters in email templates are escaped, not removed.

Modeled from REQ-papra-email-html-escaped so the claim can be checked for contradictions.
