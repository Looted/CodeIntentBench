---
title: email.sending dry_run_setting_available = False
status: active
fact_kind: property_value
subject_key: email.sending
property_key: dry_run_setting_available
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-1A812AD1B33E862A
claim_text: EMAILS_DRY_RUN is removed and EMAILS_DRIVER=logger logs emails instead of sending them
text_ref: REQ-papra-email-drivers-logger
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 0.6.0 changelog, #304: Reworked the email sending system to be more flexible and al'
  recorded_at: '2026-11-16T13:20:52.603Z'
id: FACT-papra-email-sending-dry-run-setting-available
type: fact
---
EMAILS_DRY_RUN is removed and EMAILS_DRIVER=logger logs emails instead of sending them.

Modeled from REQ-papra-email-drivers-logger so the claim can be checked for contradictions.
