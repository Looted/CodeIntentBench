---
title: When multiple organizations exist in the database, the count reflects the total number of organizations.
status: active
semantic_text: When multiple organizations exist in the database, the count reflects the total number of organizations.
semantic_clauses:
  - When multiple organizations exist in the database, the count reflects the total number of organizations
logic_claims:
  - CLAIM-9F2691544F4DF449
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1e98631e4638fa146afdcde3e74299df45dd686e2b2127dc430af47ff5611aed
semantic_inventory:
  - claim_key: CLAIM-9F2691544F4DF449
    claim_text: When multiple organizations exist in the database, the count reflects the total number of organizations
    role: condition
    status: modeled
    span:
      start: 0
      end: 103
    subjects:
      - organizations.get_organization_count
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1492'
  recorded_at: '2026-03-15T13:26:42.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-multiple-organizations-exist-in-database-count-reflects
type: req
---
When multiple organizations exist in the database, the count reflects the total number of organizations.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.repository.test.ts (organizations repository > getOrganizationCount).

## Source

Source: Papra server behaviour notes - SRV-1492
