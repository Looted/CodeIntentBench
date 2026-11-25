---
title: A member who leaves can be reinvited repeatedly while keeping accepted invitations.
status: active
semantic_text: A member who leaves can be reinvited repeatedly while keeping accepted invitations.
semantic_clauses:
  - A member who leaves can be reinvited repeatedly while keeping accepted invitations
logic_claims:
  - CLAIM-8A21E4CD1DC54C22
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: faf8bfe885354ec08a542b72f3f6f1d268b54b60e1ccba546d7b1a97cbee33e4
semantic_inventory:
  - claim_key: CLAIM-8A21E4CD1DC54C22
    claim_text: A member who leaves can be reinvited repeatedly while keeping accepted invitations
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 82
    subjects:
      - organizations.invite_member_to_organization
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1529'
  recorded_at: '2025-07-05T13:39:50.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-member-who-leaves-can-be-reinvited-repeatedly
type: req
---
A member who leaves can be reinvited repeatedly while keeping accepted invitations.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.usecases.test.ts (organizations usecases > inviteMemberToOrganization).

## Source

Source: Papra server behaviour notes - SRV-1529
