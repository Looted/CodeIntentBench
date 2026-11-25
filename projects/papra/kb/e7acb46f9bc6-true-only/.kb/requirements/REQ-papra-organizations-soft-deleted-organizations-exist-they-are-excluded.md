---
title: When soft-deleted organizations exist, they are excluded from the results.
status: active
semantic_text: When soft-deleted organizations exist, they are excluded from the results.
semantic_clauses:
  - When soft-deleted organizations exist, they are excluded from the results
logic_claims:
  - CLAIM-CF5F46E8D4C91965
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 956c210fa6b2047179b5ac76619066d59946a8134f4142290348a3ec4bfc0523
semantic_inventory:
  - claim_key: CLAIM-CF5F46E8D4C91965
    claim_text: When soft-deleted organizations exist, they are excluded from the results
    role: condition
    status: modeled
    span:
      start: 0
      end: 73
    subjects:
      - organizations.list_organizations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1513'
  recorded_at: '2026-03-25T13:23:43.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-soft-deleted-organizations-exist-they-are-excluded
type: req
---
When soft-deleted organizations exist, they are excluded from the results.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.repository.test.ts (organizations repository > listOrganizations).

## Source

Source: Papra server behaviour notes - SRV-1513
