---
title: Expired, cancelled and rejected invitations do not prevent a fresh invitation.
status: active
semantic_text: Expired, cancelled and rejected invitations do not prevent a fresh invitation.
semantic_clauses:
  - Expired, cancelled and rejected invitations do not prevent a fresh invitation
logic_claims:
  - CLAIM-56DC415E828F46AE
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a71e10ac9a247396fbf0a78343355972afa15287300e3d2cbb39655044fc9e59
semantic_inventory:
  - claim_key: CLAIM-56DC415E828F46AE
    claim_text: Expired, cancelled and rejected invitations do not prevent a fresh invitation
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 77
    subjects:
      - organizations.invite_member_to_organization
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1566'
  recorded_at: '2026-07-11T12:04:26.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-expired-cancelled-and-rejected-invitations-do-not
type: req
---
Expired, cancelled and rejected invitations do not prevent a fresh invitation.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.usecases.test.ts (organizations usecases > inviteMemberToOrganization).

## Source

Source: Papra server behaviour notes - SRV-1566
