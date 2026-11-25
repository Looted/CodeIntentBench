---
title: When no organizations exist in the database, the count is zero.
status: active
semantic_text: When no organizations exist in the database, the count is zero.
semantic_clauses:
  - When no organizations exist in the database, the count is zero
logic_claims:
  - CLAIM-A27D9C75A611DB25
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d3697b548c170380c3350b05d16aeb1701a21451fe591e785c3333c830dab22b
semantic_inventory:
  - claim_key: CLAIM-A27D9C75A611DB25
    claim_text: When no organizations exist in the database, the count is zero
    role: condition
    status: modeled
    span:
      start: 0
      end: 62
    subjects:
      - organizations.get_organization_count
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1497'
  recorded_at: '2025-05-20T12:04:18.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-no-organizations-exist-in-database-count-is
type: req
---
When no organizations exist in the database, the count is zero.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.repository.test.ts (organizations repository > getOrganizationCount).

## Source

Source: Papra server behaviour notes - SRV-1497
