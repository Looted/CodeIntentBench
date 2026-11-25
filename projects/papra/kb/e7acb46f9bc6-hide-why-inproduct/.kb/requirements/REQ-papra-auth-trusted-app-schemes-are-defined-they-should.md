---
title: When trusted app schemes are defined, they should be included in the trusted origins.
status: active
semantic_text: When trusted app schemes are defined, they should be included in the trusted origins.
semantic_clauses:
  - When trusted app schemes are defined, they should be included in the trusted origins
logic_claims:
  - CLAIM-6568A1FFAFA573FC
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 80084255e624cde16ef117e198fc629276e3de4ed1239e516210290150437e07
semantic_inventory:
  - claim_key: CLAIM-6568A1FFAFA573FC
    claim_text: When trusted app schemes are defined, they should be included in the trusted origins
    role: condition
    status: modeled
    span:
      start: 0
      end: 84
    subjects:
      - auth.get_trusted_origins
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-514'
  recorded_at: '2026-04-07T13:51:56.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:auth
id: REQ-papra-auth-trusted-app-schemes-are-defined-they-should
type: req
---
When trusted app schemes are defined, they should be included in the trusted origins.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/app/auth/auth.models.test.ts (auth models > getTrustedOrigins).

## Source

Source: Papra server behaviour notes - SRV-514
