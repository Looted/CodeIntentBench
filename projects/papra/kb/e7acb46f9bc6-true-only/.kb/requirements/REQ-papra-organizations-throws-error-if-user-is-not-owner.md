---
title: Throws an error if the user is not the owner of the organization.
status: active
semantic_text: Throws an error if the user is not the owner of the organization.
semantic_clauses:
  - Throws an error if the user is not the owner of the organization
logic_claims:
  - CLAIM-96A1533519F54CD8
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b06b07df0ccc2e6212db77683ff3d9f96bb5287fc8be4f43a077685eee2af73a
semantic_inventory:
  - claim_key: CLAIM-96A1533519F54CD8
    claim_text: Throws an error if the user is not the owner of the organization
    role: normative
    status: modeled
    span:
      start: 0
      end: 64
    subjects:
      - organizations.ensure_user_is_owner_of_organization
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1622'
  recorded_at: '2025-03-06T13:22:10.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-throws-error-if-user-is-not-owner
type: req
---
Throws an error if the user is not the owner of the organization.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.usecases.test.ts (organizations usecases > ensureUserIsOwnerOfOrganization).

## Source

Source: Papra server behaviour notes - SRV-1622
