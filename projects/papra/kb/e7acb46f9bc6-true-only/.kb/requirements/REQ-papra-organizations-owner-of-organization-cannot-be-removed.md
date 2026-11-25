---
title: The owner of an organization cannot be removed.
status: active
semantic_text: The owner of an organization cannot be removed.
semantic_clauses:
  - The owner of an organization cannot be removed
logic_claims:
  - CLAIM-4F290044E938AF83
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: fd93227e73d4914a18139095f0fa468549bf94e1e999e4ce656438fb5c7c67d0
semantic_inventory:
  - claim_key: CLAIM-4F290044E938AF83
    claim_text: The owner of an organization cannot be removed
    role: normative
    status: modeled
    span:
      start: 0
      end: 46
    subjects:
      - organizations.can_user_remove_member_from_organization
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1466'
  recorded_at: '2026-08-21T11:39:25.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-owner-of-organization-cannot-be-removed
type: req
---
The owner of an organization cannot be removed.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.models.test.ts (organizations models > canUserRemoveMemberFromOrganization).

## Source

Source: Papra server behaviour notes - SRV-1466
