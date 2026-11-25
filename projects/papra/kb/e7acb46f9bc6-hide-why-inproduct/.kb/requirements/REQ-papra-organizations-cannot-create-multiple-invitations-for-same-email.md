---
title: Cannot create multiple invitations for the same email address to the same organization to prevent spam and confusion.
status: active
semantic_text: Cannot create multiple invitations for the same email address to the same organization to prevent spam and confusion.
semantic_clauses:
  - Cannot create multiple invitations for the same email address to the same organization to prevent spam and confusion
logic_claims:
  - CLAIM-33D882A8076CB4E4
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f3fb4f035cccbfb5594cc9f2b5d8ef9ad0a3111e1cd815b11d301eb5d52a8bc4
semantic_inventory:
  - claim_key: CLAIM-33D882A8076CB4E4
    claim_text: Cannot create multiple invitations for the same email address to the same organization to prevent spam and confusion
    role: normative
    status: modeled
    span:
      start: 0
      end: 116
    subjects:
      - organizations.invite_member_to_organization
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1558'
  recorded_at: '2025-02-23T14:40:00.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-cannot-create-multiple-invitations-for-same-email
type: req
---
Cannot create multiple invitations for the same email address to the same organization to prevent spam and confusion.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.usecases.test.ts (organizations usecases > inviteMemberToOrganization).

## Source

Source: Papra server behaviour notes - SRV-1558
