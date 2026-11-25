---
title: Marks organization as deleted with deletedAt, deletedBy, and scheduledPurgeAt.
status: active
semantic_text: Marks organization as deleted with deletedAt, deletedBy, and scheduledPurgeAt.
semantic_clauses:
  - Marks organization as deleted with deletedAt, deletedBy, and scheduledPurgeAt
logic_claims:
  - CLAIM-E832897D73A7AE56
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c7d74228919d64198855c1204b27cee83a416881b99a599ec6fdaf1b9dddcb3c
semantic_inventory:
  - claim_key: CLAIM-E832897D73A7AE56
    claim_text: Marks organization as deleted with deletedAt, deletedBy, and scheduledPurgeAt
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 77
    subjects:
      - organizations.soft_delete_organization
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1483'
  recorded_at: '2025-02-11T14:09:10.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-marks-organization-as-deleted-with-deletedat-deletedby
type: req
---
Marks organization as deleted with deletedAt, deletedBy, and scheduledPurgeAt.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.repository.test.ts (organizations repository > softDeleteOrganization).

## Source

Source: Papra server behaviour notes - SRV-1483
