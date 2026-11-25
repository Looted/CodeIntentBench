---
title: Handles storage deletion errors gracefully and continues purging.
status: active
semantic_text: Handles storage deletion errors gracefully and continues purging.
semantic_clauses:
  - Handles storage deletion errors gracefully and continues purging
logic_claims:
  - CLAIM-515F344D341DF2A3
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 556f5072398630071ea99fdbbe1c1854d5966ef723354d39be578b1b0db383ac
semantic_inventory:
  - claim_key: CLAIM-515F344D341DF2A3
    claim_text: Handles storage deletion errors gracefully and continues purging
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 64
    subjects:
      - organizations.purge_expired_soft_deleted_organization
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1570'
  recorded_at: '2026-07-27T09:22:11.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-handles-storage-deletion-errors-gracefully-and-continues
type: req
---
Handles storage deletion errors gracefully and continues purging.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.usecases.test.ts (organizations usecases > purgeExpiredSoftDeletedOrganization > when a deleted organization reaches its scheduled purge date, it should be permanently deleted along with all its documents from storage).

## Source

Source: Papra server behaviour notes - SRV-1570
