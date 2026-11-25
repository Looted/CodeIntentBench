---
title: Deletes all invitations for the specified organization.
status: active
semantic_text: Deletes all invitations for the specified organization.
semantic_clauses:
  - Deletes all invitations for the specified organization
logic_claims:
  - CLAIM-8572CE14D824D06F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2b76787d501df575353a3d803a4859b1346ccfb845fb29f06e130bb9994405e4
semantic_inventory:
  - claim_key: CLAIM-8572CE14D824D06F
    claim_text: Deletes all invitations for the specified organization
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 54
    subjects:
      - organizations.delete_all_organization_invitations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1476'
  recorded_at: '2025-04-25T16:46:37.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-deletes-all-invitations-for-specified-organization
type: req
---
Deletes all invitations for the specified organization.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.repository.test.ts (organizations repository > deleteAllOrganizationInvitations).

## Source

Source: Papra server behaviour notes - SRV-1476
