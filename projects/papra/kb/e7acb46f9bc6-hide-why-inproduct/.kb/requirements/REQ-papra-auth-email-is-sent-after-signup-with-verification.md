---
title: An email is sent after signup with verification URL.
status: active
semantic_text: An email is sent after signup with verification URL.
semantic_clauses:
  - An email is sent after signup with verification URL
logic_claims:
  - CLAIM-07FF8745FB88A267
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: fda353cac46d895afb43f2437f110b3aa67d913205f660dde5e93fcf12eebd87
semantic_inventory:
  - claim_key: CLAIM-07FF8745FB88A267
    claim_text: An email is sent after signup with verification URL
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 51
    subjects:
      - auth.email_verification_e2e
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-515'
  recorded_at: '2025-09-03T16:19:52.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:auth
id: REQ-papra-auth-email-is-sent-after-signup-with-verification
type: req
---
An email is sent after signup with verification URL.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/app/auth/e2e/email-verification.e2e.test.ts (email verification e2e > signup with email verification > when email verification is required, the verification email is sent during signup).

## Source

Source: Papra server behaviour notes - SRV-515
