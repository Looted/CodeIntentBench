---
title: email.sending driver_setting = EMAILS_DRIVER
status: active
fact_kind: property_value
subject_key: email.sending
property_key: driver_setting
operator: eq
value_type: string
value_string: EMAILS_DRIVER
claim_key: CLAIM-D12DBFBB06DE3E2F
claim_text: Emails are sent through a configurable driver (EMAILS_DRIVER)
text_ref: REQ-papra-email-drivers-logger
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 0.6.0 changelog, #304: Reworked the email sending system to be more flexible and al'
  recorded_at: '2026-11-16T10:34:39.090Z'
id: FACT-papra-email-sending-driver-setting
type: fact
---
Emails are sent through a configurable driver (EMAILS_DRIVER).

Modeled from REQ-papra-email-drivers-logger so the claim can be checked for contradictions.
