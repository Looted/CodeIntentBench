---
title: One cannot remove a user from another organization.
status: active
semantic_text: One cannot remove a user from another organization.
semantic_clauses:
  - One cannot remove a user from another organization
logic_claims:
  - CLAIM-15CCB9D6E72BBC48
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 60ac70351cc1cbbe1560ee20d3c62b117ca30954afcf43a1039ab6482cfc1f34
semantic_inventory:
  - claim_key: CLAIM-15CCB9D6E72BBC48
    claim_text: One cannot remove a user from another organization
    role: normative
    status: modeled
    span:
      start: 0
      end: 50
    subjects:
      - organizations.remove_member_from_organization
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1582'
  recorded_at: '2025-04-26T08:32:54.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-one-cannot-remove-user-from-another-organization
type: req
---
One cannot remove a user from another organization.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.usecases.test.ts (organizations usecases > removeMemberFromOrganization).

## Source

Source: Papra server behaviour notes - SRV-1582
