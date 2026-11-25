---
title: Reactivating a historical invitation cannot create a second pending invitation.
status: active
semantic_text: Reactivating a historical invitation cannot create a second pending invitation.
semantic_clauses:
  - Reactivating a historical invitation cannot create a second pending invitation
logic_claims:
  - CLAIM-C07517FA137004DA
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 472aeecd09f3cea20ffc45148f69700e82daf999f83a1eb4ff2bb8fe08dfad26
semantic_inventory:
  - claim_key: CLAIM-C07517FA137004DA
    claim_text: Reactivating a historical invitation cannot create a second pending invitation
    role: normative
    status: modeled
    span:
      start: 0
      end: 78
    subjects:
      - organizations.organizations_repository
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1487'
  recorded_at: '2025-10-06T16:56:01.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-reactivating-historical-invitation-cannot-create-second-pending
type: req
---
Reactivating a historical invitation cannot create a second pending invitation.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.repository.test.ts (organizations repository > pending invitation uniqueness).

## Source

Source: Papra server behaviour notes - SRV-1487
