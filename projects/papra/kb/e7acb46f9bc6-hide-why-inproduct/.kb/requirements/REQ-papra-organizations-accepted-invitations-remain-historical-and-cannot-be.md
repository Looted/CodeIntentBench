---
title: Accepted invitations remain historical and cannot be resent.
status: active
semantic_text: Accepted invitations remain historical and cannot be resent.
semantic_clauses:
  - Accepted invitations remain historical and cannot be resent
logic_claims:
  - CLAIM-6B18663F075AD465
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f3875f98a941a0886d4ee45e7e5898847b501071d25ca540f451f13957a3963b
semantic_inventory:
  - claim_key: CLAIM-6B18663F075AD465
    claim_text: Accepted invitations remain historical and cannot be resent
    role: normative
    status: modeled
    span:
      start: 0
      end: 59
    subjects:
      - organizations.resend_organization_invitation
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1533'
  recorded_at: '2026-01-14T13:52:41.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-accepted-invitations-remain-historical-and-cannot-be
type: req
---
Accepted invitations remain historical and cannot be resent.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.usecases.test.ts (organizations usecases > resendOrganizationInvitation).

## Source

Source: Papra server behaviour notes - SRV-1533
