---
title: Users have a daily invitation limit to prevent spam and abuse of the invitation system.
status: active
semantic_text: Users have a daily invitation limit to prevent spam and abuse of the invitation system.
semantic_clauses:
  - Users have a daily invitation limit to prevent spam and abuse of the invitation system
logic_claims:
  - CLAIM-A612393BEA31E6B9
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: eedef4386a6800c03233d1a2f0b93e085a3396d999db22d9c9d90409dc199895
semantic_inventory:
  - claim_key: CLAIM-A612393BEA31E6B9
    claim_text: Users have a daily invitation limit to prevent spam and abuse of the invitation system
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 86
    subjects:
      - organizations.invite_member_to_organization
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1623'
  recorded_at: '2025-03-12T10:53:20.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-users-have-daily-invitation-limit-to-prevent
type: req
---
Users have a daily invitation limit to prevent spam and abuse of the invitation system.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.usecases.test.ts (organizations usecases > inviteMemberToOrganization).

## Source

Source: Papra server behaviour notes - SRV-1623
