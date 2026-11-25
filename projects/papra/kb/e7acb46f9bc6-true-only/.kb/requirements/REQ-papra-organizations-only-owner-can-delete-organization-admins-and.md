---
title: Only owner can delete organization, admins and members cannot.
status: active
semantic_text: Only owner can delete organization, admins and members cannot.
semantic_clauses:
  - Only owner can delete organization, admins and members cannot
logic_claims:
  - CLAIM-559981E416DBF05F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8838c550ae5a85be252ae6f397b9b5d0d94f79754e4cdeab232ac3b00ca95abe
semantic_inventory:
  - claim_key: CLAIM-559981E416DBF05F
    claim_text: Only owner can delete organization, admins and members cannot
    role: normative
    status: modeled
    span:
      start: 0
      end: 61
    subjects:
      - organizations.soft_delete_organization
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1587'
  recorded_at: '2025-06-11T11:46:50.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-only-owner-can-delete-organization-admins-and
type: req
---
Only owner can delete organization, admins and members cannot.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.usecases.test.ts (organizations usecases > softDeleteOrganization > when an organization owner wants to delete their organization, the organization is soft-deleted to allow for recovery within a grace period).

## Source

Source: Papra server behaviour notes - SRV-1587
