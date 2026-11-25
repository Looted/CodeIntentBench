---
title: If the user defined a list of trusted origins, it returns the client baseUrl and the trustedOrigins deduplicated.
status: active
semantic_text: If the user defined a list of trusted origins, it returns the client baseUrl and the trustedOrigins deduplicated.
semantic_clauses:
  - If the user defined a list of trusted origins, it returns the client baseUrl and the trustedOrigins deduplicated
logic_claims:
  - CLAIM-57F7DA276F55D7B9
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 43c0f6d530269844e1f5d7cf3f33cf2c8f0ccbb26c316aefbd644527c49971e0
semantic_inventory:
  - claim_key: CLAIM-57F7DA276F55D7B9
    claim_text: If the user defined a list of trusted origins, it returns the client baseUrl and the trustedOrigins deduplicated
    role: condition
    status: modeled
    span:
      start: 0
      end: 112
    subjects:
      - auth.get_trusted_origins
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-491'
  recorded_at: '2025-12-13T15:03:20.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:auth
id: REQ-papra-auth-user-defined-list-of-trusted-origins-it
type: req
---
If the user defined a list of trusted origins, it returns the client baseUrl and the trustedOrigins deduplicated.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/app/auth/auth.models.test.ts (auth models > getTrustedOrigins).

## Source

Source: Papra server behaviour notes - SRV-491
