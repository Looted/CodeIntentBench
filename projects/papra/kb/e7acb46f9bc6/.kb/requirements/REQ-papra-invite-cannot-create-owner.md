---
title: An organization has exactly one owner, the person who created it.
status: active
semantic_text: An organization has exactly one owner, the person who created it. Invitations and role changes can only grant the admin or member role; nobody can be invited or promoted as owner.
semantic_clauses:
  - An organization has exactly one owner, the person who created it
  - Invitations and role changes can only grant the admin or member role
  - nobody can be invited or promoted as owner
logic_claims:
  - CLAIM-DBE1AFEA63D9F946
  - CLAIM-B1BA3B4AFB57E890
  - CLAIM-199F0D948B42579D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2491e3dee9dae39a349b17c39b01e85416bdfd48a79b3bd1a6f9f6fde6133c24
semantic_inventory:
  - claim_key: CLAIM-DBE1AFEA63D9F946
    claim_text: An organization has exactly one owner, the person who created it
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 64
    subjects:
      - organizations.organization
  - claim_key: CLAIM-B1BA3B4AFB57E890
    claim_text: Invitations and role changes can only grant the admin or member role
    role: descriptive
    status: modeled
    span:
      start: 66
      end: 134
    subjects:
      - organizations.organization
  - claim_key: CLAIM-199F0D948B42579D
    claim_text: nobody can be invited or promoted as owner
    role: descriptive
    status: modeled
    span:
      start: 136
      end: 178
    subjects:
      - organizations.organization
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server test suite (apps/papra-server/src/modules): organizations/organizations.usecases.test.ts#invite-cannot-create-owner'
  recorded_at: '2026-11-15T22:57:49.624Z'
tags:
  - bootstrap
  - knowledge-source:papra-tests
  - component:invitations
  - rule:invite-cannot-create-owner
rationale: 'The test that covers the check says an invitation for the owner role cannot be created "to prevent multiple owners in an organization". Why an organization has a single owner: reason not stated.'
id: REQ-papra-invite-cannot-create-owner
type: req
---
An organization has exactly one owner, the person who created it. Invitations and role changes can only grant the admin or member role; nobody can be invited or promoted as owner.

## Context

The test that covers the check says an invitation for the owner role cannot be created "to prevent multiple owners in an organization". Why an organization has a single owner: reason not stated.

## Source

> an invitation for the owner role cannot be created to prevent multiple owners in an organization

Source: Papra server test suite (apps/papra-server/src/modules) - organizations/organizations.usecases.test.ts#invite-cannot-create-owner
