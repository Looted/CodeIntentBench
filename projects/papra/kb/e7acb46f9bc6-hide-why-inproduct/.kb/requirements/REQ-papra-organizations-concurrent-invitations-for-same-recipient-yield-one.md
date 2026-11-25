---
title: Concurrent invitations for the same recipient yield one invitation and a duplicate invitation error.
status: active
semantic_text: Concurrent invitations for the same recipient yield one invitation and a duplicate invitation error.
semantic_clauses:
  - Concurrent invitations for the same recipient yield one invitation and a duplicate invitation error
logic_claims:
  - CLAIM-DF2FE2D0078F97C6
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ece4c230435a83eb0765e5c3b2412b8995500513f0b3bfd8fd5d49c04732c86c
semantic_inventory:
  - claim_key: CLAIM-DF2FE2D0078F97C6
    claim_text: Concurrent invitations for the same recipient yield one invitation and a duplicate invitation error
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 99
    subjects:
      - organizations.organizations_repository
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1473'
  recorded_at: '2026-02-05T14:05:46.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-concurrent-invitations-for-same-recipient-yield-one
type: req
---
Concurrent invitations for the same recipient yield one invitation and a duplicate invitation error.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.repository.test.ts (organizations repository > pending invitation uniqueness).

## Source

Source: Papra server behaviour notes - SRV-1473
