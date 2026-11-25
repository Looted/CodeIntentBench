---
title: An invitation for the owner role cannot be created to prevent multiple owners in an organization.
status: active
semantic_text: An invitation for the owner role cannot be created to prevent multiple owners in an organization.
semantic_clauses:
  - An invitation for the owner role cannot be created to prevent multiple owners in an organization
logic_claims:
  - CLAIM-4BA288C72543872E
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: fa8eeaaf5f0b098f4dddf0dbd620d70d874cc2fe28d2e9d40a38c48bf04dbc4b
semantic_inventory:
  - claim_key: CLAIM-4BA288C72543872E
    claim_text: An invitation for the owner role cannot be created to prevent multiple owners in an organization
    role: normative
    status: modeled
    span:
      start: 0
      end: 96
    subjects:
      - organizations.invite_member_to_organization
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1535'
  recorded_at: '2025-08-08T14:44:26.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-invitation-for-owner-role-cannot-be-created
type: req
---
An invitation for the owner role cannot be created to prevent multiple owners in an organization.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.usecases.test.ts (organizations usecases > inviteMemberToOrganization).

## Source

Source: Papra server behaviour notes - SRV-1535
