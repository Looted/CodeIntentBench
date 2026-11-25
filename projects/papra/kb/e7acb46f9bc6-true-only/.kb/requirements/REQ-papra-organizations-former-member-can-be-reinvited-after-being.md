---
title: A former member can be reinvited after being removed from the organization.
status: active
semantic_text: A former member can be reinvited after being removed from the organization.
semantic_clauses:
  - A former member can be reinvited after being removed from the organization
logic_claims:
  - CLAIM-9C7D319DA862E3C2
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 5aa556c466c07ab55df938f7412387a5d94f59c4cd1521d806f3ae8dd7dc2523
semantic_inventory:
  - claim_key: CLAIM-9C7D319DA862E3C2
    claim_text: A former member can be reinvited after being removed from the organization
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 74
    subjects:
      - organizations.invite_member_to_organization
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1525'
  recorded_at: '2025-07-06T11:53:04.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-former-member-can-be-reinvited-after-being
type: req
---
A former member can be reinvited after being removed from the organization.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.usecases.test.ts (organizations usecases > inviteMemberToOrganization).

## Source

Source: Papra server behaviour notes - SRV-1525
