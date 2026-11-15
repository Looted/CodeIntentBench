---
title: An intake email address only ingests attachments from senders explicitly listed in its allowed origins (compared case-insensitively).
status: active
semantic_text: An intake email address only ingests attachments from senders explicitly listed in its allowed origins (compared case-insensitively). An intake email with an empty allow list accepts nothing, and a disabled intake email ignores all mail.
semantic_clauses:
  - An intake email address only ingests attachments from senders explicitly listed in its allowed origins (compared case-insensitively)
  - An intake email with an empty allow list accepts nothing
  - a disabled intake email ignores all mail
logic_claims:
  - CLAIM-D813CBB1AA1C84F8
  - CLAIM-C7105F426828C6CC
  - CLAIM-32D720330C11AD8B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 60ee695413fb08f58a7152e38654d2b2a49863ead924e69feb01c716fa157af9
semantic_inventory:
  - claim_key: CLAIM-D813CBB1AA1C84F8
    claim_text: An intake email address only ingests attachments from senders explicitly listed in its allowed origins (compared case-insensitively)
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 132
    subjects:
      - intake_email.allowed_origins
  - claim_key: CLAIM-C7105F426828C6CC
    claim_text: An intake email with an empty allow list accepts nothing
    role: descriptive
    status: modeled
    span:
      start: 134
      end: 190
    subjects:
      - intake_email.allowed_origins
  - claim_key: CLAIM-32D720330C11AD8B
    claim_text: a disabled intake email ignores all mail
    role: descriptive
    status: modeled
    span:
      start: 196
      end: 236
    subjects:
      - intake_email.address
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server test suite (apps/papra-server/src/modules): intake-emails/intake-emails.models.test.ts#intake-email-sender-allowlist'
  recorded_at: '2026-11-15T23:00:48.337Z'
tags:
  - bootstrap
  - knowledge-source:papra-tests
  - component:intake_emails
  - rule:intake-email-sender-allowlist
id: REQ-papra-intake-email-sender-allowlist
type: req
---
An intake email address only ingests attachments from senders explicitly listed in its allowed origins (compared case-insensitively). An intake email with an empty allow list accepts nothing, and a disabled intake email ignores all mail.

## Context

Reason not stated.

## Source

> if no allowed origins are provided, the origin is not allowed
> an origin is allowed if it is in the list of the intake email allowed origins email address
> when the intake email is disabled, nothing happens, only a log is emitted

Source: Papra server test suite (apps/papra-server/src/modules) - intake-emails/intake-emails.models.test.ts#intake-email-sender-allowlist
