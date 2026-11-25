---
title: Users can login immediately after signup when email verification is disabled.
status: active
semantic_text: Users can login immediately after signup when email verification is disabled.
semantic_clauses:
  - Users can login immediately after signup when email verification is disabled
logic_claims:
  - CLAIM-420B18ADE02705DE
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 21c242bceed18730ad8da03126872ce6d7b93e962f37404c9ee9c040b279e611
semantic_inventory:
  - claim_key: CLAIM-420B18ADE02705DE
    claim_text: Users can login immediately after signup when email verification is disabled
    role: normative
    status: modeled
    span:
      start: 0
      end: 76
    subjects:
      - auth.email_verification_e2e
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-524'
  recorded_at: '2025-09-21T13:20:07.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:auth
id: REQ-papra-auth-users-can-login-immediately-after-signup-when
type: req
---
Users can login immediately after signup when email verification is disabled.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/app/auth/e2e/email-verification.e2e.test.ts (email verification e2e > signup with email verification > when email verification is disabled, no verification email is sent).

## Source

Source: Papra server behaviour notes - SRV-524
