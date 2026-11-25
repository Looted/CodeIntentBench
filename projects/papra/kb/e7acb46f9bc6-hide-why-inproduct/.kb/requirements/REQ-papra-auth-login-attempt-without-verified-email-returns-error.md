---
title: Login attempt without verified email returns an error.
status: active
semantic_text: Login attempt without verified email returns an error.
semantic_clauses:
  - Login attempt without verified email returns an error
logic_claims:
  - CLAIM-1A988E0C4C6F4F60
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b737976483f1e6b9f89109f71284d08bf46a6e55bc18690115bad8db1d1befcf
semantic_inventory:
  - claim_key: CLAIM-1A988E0C4C6F4F60
    claim_text: Login attempt without verified email returns an error
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 53
    subjects:
      - auth.email_verification_e2e
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-518'
  recorded_at: '2025-06-12T08:06:28.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:auth
id: REQ-papra-auth-login-attempt-without-verified-email-returns-error
type: req
---
Login attempt without verified email returns an error.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/app/auth/e2e/email-verification.e2e.test.ts (email verification e2e > signup with email verification > when email verification is required, users cannot login without verifying their email).

## Source

Source: Papra server behaviour notes - SRV-518
