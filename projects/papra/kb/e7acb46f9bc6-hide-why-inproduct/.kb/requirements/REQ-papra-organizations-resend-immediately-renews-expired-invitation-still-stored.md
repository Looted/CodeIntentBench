---
title: Resend immediately renews an expired invitation still stored as pending.
status: active
semantic_text: Resend immediately renews an expired invitation still stored as pending.
semantic_clauses:
  - Resend immediately renews an expired invitation still stored as pending
logic_claims:
  - CLAIM-0C7391A277F3289D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 7ab190e33fc4309777f5c6c0cfc987d4b918ebd1636b849ff2e393ab3c13e7eb
semantic_inventory:
  - claim_key: CLAIM-0C7391A277F3289D
    claim_text: Resend immediately renews an expired invitation still stored as pending
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 71
    subjects:
      - organizations.resend_organization_invitation
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1597'
  recorded_at: '2026-07-03T17:36:07.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-resend-immediately-renews-expired-invitation-still-stored
type: req
---
Resend immediately renews an expired invitation still stored as pending.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.usecases.test.ts (organizations usecases > resendOrganizationInvitation).

## Source

Source: Papra server behaviour notes - SRV-1597
