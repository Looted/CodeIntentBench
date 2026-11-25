---
title: Cannot delete organization with an active subscription.
status: active
semantic_text: Cannot delete organization with an active subscription.
semantic_clauses:
  - Cannot delete organization with an active subscription
logic_claims:
  - CLAIM-063753299FA1CA0A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a8368be80156b3ddeb194be2e5b094dd9aced6f21ec1cd39b061d488cbc7731a
semantic_inventory:
  - claim_key: CLAIM-063753299FA1CA0A
    claim_text: Cannot delete organization with an active subscription
    role: normative
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
  ref: 'Papra server behaviour notes: SRV-1560'
  recorded_at: '2026-04-03T08:50:50.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-cannot-delete-organization-with-active-subscription
type: req
---
Cannot delete organization with an active subscription.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.usecases.test.ts (organizations usecases > softDeleteOrganization > when an organization owner wants to delete their organization, the organization is soft-deleted to allow for recovery within a grace period).

## Source

Source: Papra server behaviour notes - SRV-1560
