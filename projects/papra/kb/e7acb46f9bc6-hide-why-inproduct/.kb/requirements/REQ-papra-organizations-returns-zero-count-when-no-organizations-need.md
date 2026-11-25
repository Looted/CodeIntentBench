---
title: Returns zero count when no organizations need purging.
status: active
semantic_text: Returns zero count when no organizations need purging.
semantic_clauses:
  - Returns zero count when no organizations need purging
logic_claims:
  - CLAIM-964EDAE1B437803A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8a3f7aa5c62030b36825faf186870b56b4abf7ef9fdfc046217635d5b78d5bd7
semantic_inventory:
  - claim_key: CLAIM-964EDAE1B437803A
    claim_text: Returns zero count when no organizations need purging
    role: normative
    status: modeled
    span:
      start: 0
      end: 53
    subjects:
      - organizations.purge_expired_soft_deleted_organizations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1603'
  recorded_at: '2026-03-02T15:24:39.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-returns-zero-count-when-no-organizations-need
type: req
---
Returns zero count when no organizations need purging.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.usecases.test.ts (organizations usecases > purgeExpiredSoftDeletedOrganizations > batch purges all expired organizations past their scheduled purge date).

## Source

Source: Papra server behaviour notes - SRV-1603
