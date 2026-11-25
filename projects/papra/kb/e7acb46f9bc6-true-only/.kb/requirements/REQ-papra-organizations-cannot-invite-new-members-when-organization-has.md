---
title: Cannot invite new members when the organization has reached its maximum member count (including pending invitations) defined by the plan to enforce subscript…
status: active
semantic_text: Cannot invite new members when the organization has reached its maximum member count (including pending invitations) defined by the plan to enforce subscription limits.
semantic_clauses:
  - Cannot invite new members when the organization has reached its maximum member count (including pending invitations) defined by the plan to enforce subscription limits
logic_claims:
  - CLAIM-1D48F7994D3BCB5D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: abf131f751f476ce48ef253ce9202a6655abf03fec32f1cd6cdfcdac8edbac7d
semantic_inventory:
  - claim_key: CLAIM-1D48F7994D3BCB5D
    claim_text: Cannot invite new members when the organization has reached its maximum member count (including pending invitations) defined by the plan to enforce subscription limits
    role: normative
    status: modeled
    span:
      start: 0
      end: 167
    subjects:
      - organizations.invite_member_to_organization
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1564'
  recorded_at: '2026-04-19T12:53:26.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-cannot-invite-new-members-when-organization-has
type: req
---
Cannot invite new members when the organization has reached its maximum member count (including pending invitations) defined by the plan to enforce subscription limits.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.usecases.test.ts (organizations usecases > inviteMemberToOrganization).

## Source

Source: Papra server behaviour notes - SRV-1564
