---
title: An old invitation cannot be resent to a current member.
status: active
semantic_text: An old invitation cannot be resent to a current member.
semantic_clauses:
  - An old invitation cannot be resent to a current member
logic_claims:
  - CLAIM-5212AE457FAB9A71
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c2ce6278fe2fdc9e00ff6d6196b07cacccdd2eaab8801e928a4a2d036daa04bf
semantic_inventory:
  - claim_key: CLAIM-5212AE457FAB9A71
    claim_text: An old invitation cannot be resent to a current member
    role: normative
    status: modeled
    span:
      start: 0
      end: 54
    subjects:
      - organizations.resend_organization_invitation
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1538'
  recorded_at: '2025-07-18T09:25:33.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-old-invitation-cannot-be-resent-to-current
type: req
---
An old invitation cannot be resent to a current member.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.usecases.test.ts (organizations usecases > resendOrganizationInvitation).

## Source

Source: Papra server behaviour notes - SRV-1538
