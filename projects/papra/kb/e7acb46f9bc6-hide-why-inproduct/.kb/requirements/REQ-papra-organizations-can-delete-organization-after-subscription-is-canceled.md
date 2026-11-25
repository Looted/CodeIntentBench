---
title: Can delete organization after subscription is canceled.
status: active
semantic_text: Can delete organization after subscription is canceled.
semantic_clauses:
  - Can delete organization after subscription is canceled
logic_claims:
  - CLAIM-0455C63505DFDBA3
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: eb7eb6830d036bbc14c56e5987fc88879c2ecdd506cc27eed4e0d8c52ca88ed1
semantic_inventory:
  - claim_key: CLAIM-0455C63505DFDBA3
    claim_text: Can delete organization after subscription is canceled
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 54
    subjects:
      - organizations.soft_delete_organization
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1551'
  recorded_at: '2025-03-24T14:46:23.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-can-delete-organization-after-subscription-is-canceled
type: req
---
Can delete organization after subscription is canceled.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.usecases.test.ts (organizations usecases > softDeleteOrganization > when an organization owner wants to delete their organization, the organization is soft-deleted to allow for recovery within a grace period).

## Source

Source: Papra server behaviour notes - SRV-1551
