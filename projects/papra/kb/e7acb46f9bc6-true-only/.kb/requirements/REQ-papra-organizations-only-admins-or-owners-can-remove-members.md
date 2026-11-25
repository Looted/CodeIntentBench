---
title: Only admins or owners can remove members from an organization.
status: active
semantic_text: Only admins or owners can remove members from an organization.
semantic_clauses:
  - Only admins or owners can remove members from an organization
logic_claims:
  - CLAIM-27B50F2DE6886A61
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 4dde5da79897c067dcdc6684dd20786d1da424ccd71915069e60a52f9562e949
semantic_inventory:
  - claim_key: CLAIM-27B50F2DE6886A61
    claim_text: Only admins or owners can remove members from an organization
    role: normative
    status: modeled
    span:
      start: 0
      end: 61
    subjects:
      - organizations.can_user_remove_member_from_organization
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1464'
  recorded_at: '2025-12-01T11:18:32.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-only-admins-or-owners-can-remove-members
type: req
---
Only admins or owners can remove members from an organization.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.models.test.ts (organizations models > canUserRemoveMemberFromOrganization).

## Source

Source: Papra server behaviour notes - SRV-1464
