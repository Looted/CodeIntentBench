---
title: Can delete organization with subscription scheduled to cancel at period end.
status: active
semantic_text: Can delete organization with subscription scheduled to cancel at period end.
semantic_clauses:
  - Can delete organization with subscription scheduled to cancel at period end
logic_claims:
  - CLAIM-C0C48DEFB5D17BBD
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f21512d28094be85df3ab98b93be92c996ab468bf84bb93cb0f97c64716d3c12
semantic_inventory:
  - claim_key: CLAIM-C0C48DEFB5D17BBD
    claim_text: Can delete organization with subscription scheduled to cancel at period end
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 75
    subjects:
      - organizations.soft_delete_organization
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1554'
  recorded_at: '2026-07-09T17:26:28.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-can-delete-organization-with-subscription-scheduled-to
type: req
---
Can delete organization with subscription scheduled to cancel at period end.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.usecases.test.ts (organizations usecases > softDeleteOrganization > when an organization owner wants to delete their organization, the organization is soft-deleted to allow for recovery within a grace period).

## Source

Source: Papra server behaviour notes - SRV-1554
