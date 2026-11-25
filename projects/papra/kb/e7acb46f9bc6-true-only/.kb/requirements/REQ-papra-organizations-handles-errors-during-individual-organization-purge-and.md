---
title: Handles errors during individual organization purge and continues with others.
status: active
semantic_text: Handles errors during individual organization purge and continues with others.
semantic_clauses:
  - Handles errors during individual organization purge and continues with others
logic_claims:
  - CLAIM-3D9F184BA988D6E8
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ed1d82b59b7f72a063db83256eed6eaa8287b12a20dea7c06612fa915569d1ac
semantic_inventory:
  - claim_key: CLAIM-3D9F184BA988D6E8
    claim_text: Handles errors during individual organization purge and continues with others
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 77
    subjects:
      - organizations.purge_expired_soft_deleted_organizations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1568'
  recorded_at: '2026-07-12T16:00:17.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-handles-errors-during-individual-organization-purge-and
type: req
---
Handles errors during individual organization purge and continues with others.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.usecases.test.ts (organizations usecases > purgeExpiredSoftDeletedOrganizations > batch purges all expired organizations past their scheduled purge date).

## Source

Source: Papra server behaviour notes - SRV-1568
