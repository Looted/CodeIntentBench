---
title: A member (not admin nor owner) cannot remove anyone from the organization.
status: active
semantic_text: A member (not admin nor owner) cannot remove anyone from the organization.
semantic_clauses:
  - A member (not admin nor owner) cannot remove anyone from the organization
logic_claims:
  - CLAIM-245B29DCAF0D0D8C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 853b8fe24b50e4a3e32c64466db1985c9038f9d386c18f0a73f30a0d209801fd
semantic_inventory:
  - claim_key: CLAIM-245B29DCAF0D0D8C
    claim_text: A member (not admin nor owner) cannot remove anyone from the organization
    role: normative
    status: modeled
    span:
      start: 0
      end: 73
    subjects:
      - organizations.remove_member_from_organization
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1526'
  recorded_at: '2026-08-17T11:05:06.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-member-not-admin-nor-owner-cannot-remove
type: req
---
A member (not admin nor owner) cannot remove anyone from the organization.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.usecases.test.ts (organizations usecases > removeMemberFromOrganization).

## Source

Source: Papra server behaviour notes - SRV-1526
