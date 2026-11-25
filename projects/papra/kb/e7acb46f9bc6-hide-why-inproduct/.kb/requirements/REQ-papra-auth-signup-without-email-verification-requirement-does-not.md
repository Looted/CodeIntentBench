---
title: Signup without email verification requirement does not send email.
status: active
semantic_text: Signup without email verification requirement does not send email.
semantic_clauses:
  - Signup without email verification requirement does not send email
logic_claims:
  - CLAIM-570E97AEC7A9B53A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 44cf46e6a043d5b56bcbdb7d04006594b37ebcb31e93bc10718aa89b7b72e0fc
semantic_inventory:
  - claim_key: CLAIM-570E97AEC7A9B53A
    claim_text: Signup without email verification requirement does not send email
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 65
    subjects:
      - auth.email_verification_e2e
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-522'
  recorded_at: '2026-03-09T16:33:14.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:auth
id: REQ-papra-auth-signup-without-email-verification-requirement-does-not
type: req
---
Signup without email verification requirement does not send email.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/app/auth/e2e/email-verification.e2e.test.ts (email verification e2e > signup with email verification > when email verification is disabled, no verification email is sent).

## Source

Source: Papra server behaviour notes - SRV-522
