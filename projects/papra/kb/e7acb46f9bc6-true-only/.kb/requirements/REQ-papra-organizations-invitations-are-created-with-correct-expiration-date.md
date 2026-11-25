---
title: Invitations are created with the correct expiration date and an email notification is sent to the invited user.
status: active
semantic_text: Invitations are created with the correct expiration date and an email notification is sent to the invited user.
semantic_clauses:
  - Invitations are created with the correct expiration date and an email notification is sent to the invited user
logic_claims:
  - CLAIM-B4781AEBFC207054
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a3f292b431abea1afcbc3067b931686788943c595c3b0e4a0cebb07ffed46f09
semantic_inventory:
  - claim_key: CLAIM-B4781AEBFC207054
    claim_text: Invitations are created with the correct expiration date and an email notification is sent to the invited user
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 110
    subjects:
      - organizations.invite_member_to_organization
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1578'
  recorded_at: '2025-02-28T15:27:34.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-invitations-are-created-with-correct-expiration-date
type: req
---
Invitations are created with the correct expiration date and an email notification is sent to the invited user.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.usecases.test.ts (organizations usecases > inviteMemberToOrganization).

## Source

Source: Papra server behaviour notes - SRV-1578
