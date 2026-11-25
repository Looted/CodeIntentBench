---
title: email.sending smtp_supported = True
status: active
fact_kind: property_value
subject_key: email.sending
property_key: smtp_supported
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-94260C16E3419F14
claim_text: Emails can be sent through a classic SMTP server
text_ref: REQ-papra-smtp-email-driver
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 0.6.0 changelog, #306: Added support for classic SMTP client for email sending'
  recorded_at: '2026-11-16T13:20:56.387Z'
id: FACT-papra-email-sending-smtp-supported
type: fact
---
Emails can be sent through a classic SMTP server.

Modeled from REQ-papra-smtp-email-driver so the claim can be checked for contradictions.
