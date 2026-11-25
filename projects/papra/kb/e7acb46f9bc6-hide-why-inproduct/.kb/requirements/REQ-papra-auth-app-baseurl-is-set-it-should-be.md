---
title: If the app baseUrl is set, it should be used instead of the client baseUrl.
status: active
semantic_text: If the app baseUrl is set, it should be used instead of the client baseUrl.
semantic_clauses:
  - If the app baseUrl is set, it should be used instead of the client baseUrl
logic_claims:
  - CLAIM-6924D9382240BB44
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f8d0d0c353f0e9494428ec33b9a8e532720a5fd9f83bbb0c05b86278907ff79c
semantic_inventory:
  - claim_key: CLAIM-6924D9382240BB44
    claim_text: If the app baseUrl is set, it should be used instead of the client baseUrl
    role: condition
    status: modeled
    span:
      start: 0
      end: 74
    subjects:
      - auth.get_trusted_origins
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-489'
  recorded_at: '2026-05-19T14:14:06.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:auth
id: REQ-papra-auth-app-baseurl-is-set-it-should-be
type: req
---
If the app baseUrl is set, it should be used instead of the client baseUrl.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/app/auth/auth.models.test.ts (auth models > getTrustedOrigins).

## Source

Source: Papra server behaviour notes - SRV-489
