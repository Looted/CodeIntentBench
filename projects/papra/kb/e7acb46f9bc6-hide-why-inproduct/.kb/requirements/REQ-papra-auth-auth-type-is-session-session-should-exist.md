---
title: When the auth type is session, the session should exist.
status: active
semantic_text: When the auth type is session, the session should exist.
semantic_clauses:
  - When the auth type is session, the session should exist
logic_claims:
  - CLAIM-2040B3860C4EF508
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 83e45e63bba7298bc7810cde37487b449081104a6796ab0035c42ee9b4a54302
semantic_inventory:
  - claim_key: CLAIM-2040B3860C4EF508
    claim_text: When the auth type is session, the session should exist
    role: condition
    status: modeled
    span:
      start: 0
      end: 55
    subjects:
      - auth.check_authentication
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-513'
  recorded_at: '2026-08-23T14:04:13.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:auth
id: REQ-papra-auth-auth-type-is-session-session-should-exist
type: req
---
When the auth type is session, the session should exist.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/app/auth/auth.models.test.ts (auth models > checkAuthentication).

## Source

Source: Papra server behaviour notes - SRV-513
