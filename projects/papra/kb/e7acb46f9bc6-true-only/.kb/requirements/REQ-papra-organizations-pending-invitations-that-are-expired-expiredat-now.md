---
title: The pending invitations that are expired (expiredAt < now) are updated to expired.
status: active
semantic_text: The pending invitations that are expired (expiredAt < now) are updated to expired.
semantic_clauses:
  - The pending invitations that are expired (expiredAt < now) are updated to expired
logic_claims:
  - CLAIM-22C217BC14BAC2A7
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 45e9a6bd4a825b279f3a0b95ca45f3bad614c5cae9aadee27bd90fcc3449b356
semantic_inventory:
  - claim_key: CLAIM-22C217BC14BAC2A7
    claim_text: The pending invitations that are expired (expiredAt < now) are updated to expired
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 81
    subjects:
      - organizations.update_expired_pending_invitations_status
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1488'
  recorded_at: '2026-07-11T09:43:29.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-pending-invitations-that-are-expired-expiredat-now
type: req
---
The pending invitations that are expired (expiredAt < now) are updated to expired.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.repository.test.ts (organizations repository > updateExpiredPendingInvitationsStatus).

## Source

Source: Papra server behaviour notes - SRV-1488
