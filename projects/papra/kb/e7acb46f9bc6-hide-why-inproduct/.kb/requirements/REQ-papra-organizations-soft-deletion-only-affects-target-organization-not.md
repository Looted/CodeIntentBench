---
title: Soft deletion only affects the target organization, not other organizations.
status: active
semantic_text: Soft deletion only affects the target organization, not other organizations.
semantic_clauses:
  - Soft deletion only affects the target organization, not other organizations
logic_claims:
  - CLAIM-72D0564BDA2A1F40
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: de6492681728c0d9740e01d1274ab80690dca5817b02790f5cf21524b2995a07
semantic_inventory:
  - claim_key: CLAIM-72D0564BDA2A1F40
    claim_text: Soft deletion only affects the target organization, not other organizations
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
  ref: 'Papra server behaviour notes: SRV-1605'
  recorded_at: '2025-04-15T09:56:53.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-soft-deletion-only-affects-target-organization-not
type: req
---
Soft deletion only affects the target organization, not other organizations.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.usecases.test.ts (organizations usecases > softDeleteOrganization > when an organization owner wants to delete their organization, the organization is soft-deleted to allow for recovery within a grace period).

## Source

Source: Papra server behaviour notes - SRV-1605
