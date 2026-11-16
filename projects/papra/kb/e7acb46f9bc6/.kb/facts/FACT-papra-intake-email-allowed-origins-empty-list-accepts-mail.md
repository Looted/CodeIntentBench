---
title: intake_email.allowed_origins empty_list_accepts_mail = False
status: active
fact_kind: property_value
subject_key: intake_email.allowed_origins
property_key: empty_list_accepts_mail
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-C7105F426828C6CC
claim_text: An intake email with an empty allow list accepts nothing
text_ref: REQ-papra-intake-email-sender-allowlist
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): intake-emails/intake-emails.models.test.ts#intake-email-sender-allowlist'
  recorded_at: '2026-11-16T10:18:39.254Z'
id: FACT-papra-intake-email-allowed-origins-empty-list-accepts-mail
type: fact
---
An intake email with an empty allow list accepts nothing.

Modeled from REQ-papra-intake-email-sender-allowlist so the claim can be checked for contradictions.
