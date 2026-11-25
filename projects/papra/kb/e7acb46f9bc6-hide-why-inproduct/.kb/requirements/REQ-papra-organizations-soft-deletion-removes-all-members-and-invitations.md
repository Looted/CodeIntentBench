---
title: Soft deletion removes all members and invitations from the organization.
status: active
semantic_text: Soft deletion removes all members and invitations from the organization.
semantic_clauses:
  - Soft deletion removes all members and invitations from the organization
logic_claims:
  - CLAIM-CB9723D43DDB909A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 230df5cf2920588c2a4fe1eb97b8402d65dd53fc1b944d4887415c99cb4c045d
semantic_inventory:
  - claim_key: CLAIM-CB9723D43DDB909A
    claim_text: Soft deletion removes all members and invitations from the organization
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 71
    subjects:
      - organizations.soft_delete_organization
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1606'
  recorded_at: '2026-01-11T15:26:32.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-soft-deletion-removes-all-members-and-invitations
type: req
---
Soft deletion removes all members and invitations from the organization.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.usecases.test.ts (organizations usecases > softDeleteOrganization > when an organization owner wants to delete their organization, the organization is soft-deleted to allow for recovery within a grace period).

## Source

Source: Papra server behaviour notes - SRV-1606
