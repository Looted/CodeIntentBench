---
title: intake_email.allowed_origins accepted_senders = listed_origins_only_case_insensitive
status: active
fact_kind: property_value
subject_key: intake_email.allowed_origins
property_key: accepted_senders
operator: eq
value_type: string
value_string: listed_origins_only_case_insensitive
claim_key: CLAIM-D813CBB1AA1C84F8
claim_text: An intake email address only ingests attachments from senders explicitly listed in its allowed origins (compared case-insensitively)
text_ref: REQ-papra-intake-email-sender-allowlist
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): intake-emails/intake-emails.models.test.ts#intake-email-sender-allowlist'
  recorded_at: '2026-11-15T22:57:42.368Z'
id: FACT-papra-intake-email-allowed-origins-accepted-senders
type: fact
---
An intake email address only ingests attachments from senders explicitly listed in its allowed origins (compared case-insensitively).

Modeled from REQ-papra-intake-email-sender-allowlist so the claim can be checked for contradictions.
