---
title: intake_email.address disabled_address_ingests_mail = False
status: active
fact_kind: property_value
subject_key: intake_email.address
property_key: disabled_address_ingests_mail
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-32D720330C11AD8B
claim_text: a disabled intake email ignores all mail
text_ref: REQ-papra-intake-email-sender-allowlist
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): intake-emails/intake-emails.models.test.ts#intake-email-sender-allowlist'
  recorded_at: '2026-11-16T10:18:40.939Z'
id: FACT-papra-intake-email-address-disabled-address-ingests-mail
type: fact
---
A disabled intake email ignores all mail.

Modeled from REQ-papra-intake-email-sender-allowlist so the claim can be checked for contradictions.
