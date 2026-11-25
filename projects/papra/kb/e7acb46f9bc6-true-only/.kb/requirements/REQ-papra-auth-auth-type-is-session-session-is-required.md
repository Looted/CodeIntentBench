---
title: When the auth type is session, the session is required.
status: active
semantic_text: When the auth type is session, the session is required.
semantic_clauses:
  - When the auth type is session, the session is required
logic_claims:
  - CLAIM-3896B947D1F062E3
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 32cf0f6fbefa626985434d2c99cf8c4cd48828c109b34c579f02a4c071aa3949
semantic_inventory:
  - claim_key: CLAIM-3896B947D1F062E3
    claim_text: When the auth type is session, the session is required
    role: condition
    status: modeled
    span:
      start: 0
      end: 54
    subjects:
      - auth.check_authentication
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-509'
  recorded_at: '2025-07-02T09:48:20.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:auth
id: REQ-papra-auth-auth-type-is-session-session-is-required
type: req
---
When the auth type is session, the session is required.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/app/auth/auth.models.test.ts (auth models > checkAuthentication > coherence checks).

## Source

Source: Papra server behaviour notes - SRV-509
