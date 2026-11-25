---
title: A cancelled invitation can be resent after a newer invitation expires.
status: active
semantic_text: A cancelled invitation can be resent after a newer invitation expires.
semantic_clauses:
  - A cancelled invitation can be resent after a newer invitation expires
logic_claims:
  - CLAIM-F99E997543CC8242
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 7b50a2581fbe0eeb438b2f3ddfaae66ece5c8fade839c316b0765a977df42ff3
semantic_inventory:
  - claim_key: CLAIM-F99E997543CC8242
    claim_text: A cancelled invitation can be resent after a newer invitation expires
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 69
    subjects:
      - organizations.resend_organization_invitation
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1522'
  recorded_at: '2025-07-03T14:46:26.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-cancelled-invitation-can-be-resent-after-newer
type: req
---
A cancelled invitation can be resent after a newer invitation expires.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.usecases.test.ts (organizations usecases > resendOrganizationInvitation).

## Source

Source: Papra server behaviour notes - SRV-1522
