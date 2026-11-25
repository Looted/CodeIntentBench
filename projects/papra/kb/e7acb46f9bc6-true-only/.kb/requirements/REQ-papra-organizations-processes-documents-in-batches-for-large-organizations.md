---
title: Processes documents in batches for large organizations.
status: active
semantic_text: Processes documents in batches for large organizations.
semantic_clauses:
  - Processes documents in batches for large organizations
logic_claims:
  - CLAIM-E48A600DA59F7523
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 409c6170bc709b78ae3b2227b0f1aee1f932f14300f2a7f2a889790226b333c9
semantic_inventory:
  - claim_key: CLAIM-E48A600DA59F7523
    claim_text: Processes documents in batches for large organizations
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 54
    subjects:
      - organizations.purge_expired_soft_deleted_organization
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1591'
  recorded_at: '2026-09-13T10:17:10.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-processes-documents-in-batches-for-large-organizations
type: req
---
Processes documents in batches for large organizations.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.usecases.test.ts (organizations usecases > purgeExpiredSoftDeletedOrganization > when a deleted organization reaches its scheduled purge date, it should be permanently deleted along with all its documents from storage).

## Source

Source: Papra server behaviour notes - SRV-1591
