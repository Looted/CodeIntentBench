---
title: Cannot invite a user who is already a member of the organization to prevent duplicate memberships.
status: active
semantic_text: Cannot invite a user who is already a member of the organization to prevent duplicate memberships.
semantic_clauses:
  - Cannot invite a user who is already a member of the organization to prevent duplicate memberships
logic_claims:
  - CLAIM-C9FB7AA1AC7700B9
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 579738a6517b93c29a987965946c370e0d48f9dde4077c580af9265df891b52d
semantic_inventory:
  - claim_key: CLAIM-C9FB7AA1AC7700B9
    claim_text: Cannot invite a user who is already a member of the organization to prevent duplicate memberships
    role: normative
    status: modeled
    span:
      start: 0
      end: 97
    subjects:
      - organizations.invite_member_to_organization
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1563'
  recorded_at: '2026-09-26T13:33:42.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-cannot-invite-user-who-is-already-member
type: req
---
Cannot invite a user who is already a member of the organization to prevent duplicate memberships.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.usecases.test.ts (organizations usecases > inviteMemberToOrganization).

## Source

Source: Papra server behaviour notes - SRV-1563
