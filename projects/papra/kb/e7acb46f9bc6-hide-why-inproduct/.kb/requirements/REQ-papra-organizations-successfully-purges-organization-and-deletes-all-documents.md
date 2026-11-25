---
title: Successfully purges organization and deletes all documents from storage.
status: active
semantic_text: Successfully purges organization and deletes all documents from storage.
semantic_clauses:
  - Successfully purges organization and deletes all documents from storage
logic_claims:
  - CLAIM-5DB7A14EFA7F9469
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: cd2277cb236ffaae24ab6937f87c9b8de12c3b435a78050ef029b41f1ddab524
semantic_inventory:
  - claim_key: CLAIM-5DB7A14EFA7F9469
    claim_text: Successfully purges organization and deletes all documents from storage
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 71
    subjects:
      - organizations.purge_expired_soft_deleted_organization
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1613'
  recorded_at: '2025-08-26T12:12:13.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-successfully-purges-organization-and-deletes-all-documents
type: req
---
Successfully purges organization and deletes all documents from storage.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.usecases.test.ts (organizations usecases > purgeExpiredSoftDeletedOrganization > when a deleted organization reaches its scheduled purge date, it should be permanently deleted along with all its documents from storage).

## Source

Source: Papra server behaviour notes - SRV-1613
