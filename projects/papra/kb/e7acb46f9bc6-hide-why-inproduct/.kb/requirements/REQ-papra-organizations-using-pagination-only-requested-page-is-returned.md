---
title: When using pagination, only the requested page is returned.
status: active
semantic_text: When using pagination, only the requested page is returned.
semantic_clauses:
  - When using pagination, only the requested page is returned
logic_claims:
  - CLAIM-F44ECDA0B4CB7CC6
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1eb750ca44518700b3e6b648bdf0a48f34d06e150735bbc37d10c8b8e805551e
semantic_inventory:
  - claim_key: CLAIM-F44ECDA0B4CB7CC6
    claim_text: When using pagination, only the requested page is returned
    role: condition
    status: modeled
    span:
      start: 0
      end: 58
    subjects:
      - organizations.list_organizations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1519'
  recorded_at: '2026-01-12T08:23:28.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-using-pagination-only-requested-page-is-returned
type: req
---
When using pagination, only the requested page is returned.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.repository.test.ts (organizations repository > listOrganizations).

## Source

Source: Papra server behaviour notes - SRV-1519
