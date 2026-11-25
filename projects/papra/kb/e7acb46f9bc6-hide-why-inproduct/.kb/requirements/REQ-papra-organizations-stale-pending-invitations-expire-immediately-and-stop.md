---
title: Stale pending invitations expire immediately and stop consuming organization capacity.
status: active
semantic_text: Stale pending invitations expire immediately and stop consuming organization capacity.
semantic_clauses:
  - Stale pending invitations expire immediately and stop consuming organization capacity
logic_claims:
  - CLAIM-C82077C8DA20EC84
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e6e530492282a36f803c48005112e3b2a6aeb0a19ea0344a601912a747d1c925
semantic_inventory:
  - claim_key: CLAIM-C82077C8DA20EC84
    claim_text: Stale pending invitations expire immediately and stop consuming organization capacity
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 85
    subjects:
      - organizations.invite_member_to_organization
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1609'
  recorded_at: '2025-11-22T14:10:53.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-stale-pending-invitations-expire-immediately-and-stop
type: req
---
Stale pending invitations expire immediately and stop consuming organization capacity.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.usecases.test.ts (organizations usecases > inviteMemberToOrganization).

## Source

Source: Papra server behaviour notes - SRV-1609
