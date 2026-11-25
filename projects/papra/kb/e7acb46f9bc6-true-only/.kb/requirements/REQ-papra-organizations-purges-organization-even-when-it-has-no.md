---
title: Purges organization even when it has no documents.
status: active
semantic_text: Purges organization even when it has no documents.
semantic_clauses:
  - Purges organization even when it has no documents
logic_claims:
  - CLAIM-E66AF46901F93174
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b72fdb49e62a43b505921df238f611bd50f6514997b59fed17dba1e57136eb77
semantic_inventory:
  - claim_key: CLAIM-E66AF46901F93174
    claim_text: Purges organization even when it has no documents
    role: normative
    status: modeled
    span:
      start: 0
      end: 49
    subjects:
      - organizations.purge_expired_soft_deleted_organization
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1594'
  recorded_at: '2025-06-03T12:35:43.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-purges-organization-even-when-it-has-no
type: req
---
Purges organization even when it has no documents.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.usecases.test.ts (organizations usecases > purgeExpiredSoftDeletedOrganization > when a deleted organization reaches its scheduled purge date, it should be permanently deleted along with all its documents from storage).

## Source

Source: Papra server behaviour notes - SRV-1594
