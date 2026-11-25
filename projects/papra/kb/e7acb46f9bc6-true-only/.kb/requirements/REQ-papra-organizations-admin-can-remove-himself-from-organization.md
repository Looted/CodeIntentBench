---
title: A admin can remove himself from the organization.
status: active
semantic_text: A admin can remove himself from the organization.
semantic_clauses:
  - A admin can remove himself from the organization
logic_claims:
  - CLAIM-09AEF596B899426F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 50859728d64a6d72b6810287d8105ec0fd5112a14668969ce431c15dd9ac4ab9
semantic_inventory:
  - claim_key: CLAIM-09AEF596B899426F
    claim_text: A admin can remove himself from the organization
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 48
    subjects:
      - organizations.remove_member_from_organization
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1520'
  recorded_at: '2025-08-20T11:03:06.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-admin-can-remove-himself-from-organization
type: req
---
A admin can remove himself from the organization.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.usecases.test.ts (organizations usecases > removeMemberFromOrganization).

## Source

Source: Papra server behaviour notes - SRV-1520
