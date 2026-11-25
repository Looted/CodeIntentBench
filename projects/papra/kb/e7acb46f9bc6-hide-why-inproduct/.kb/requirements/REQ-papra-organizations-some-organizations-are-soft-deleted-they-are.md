---
title: When some organizations are soft-deleted, they are excluded from the count.
status: active
semantic_text: When some organizations are soft-deleted, they are excluded from the count.
semantic_clauses:
  - When some organizations are soft-deleted, they are excluded from the count
logic_claims:
  - CLAIM-A6BBD2AEA7EAF3D6
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b44366f435de25fd43d5f065f8b07be84c8be365f6e6d00a21f57efdda2f721b
semantic_inventory:
  - claim_key: CLAIM-A6BBD2AEA7EAF3D6
    claim_text: When some organizations are soft-deleted, they are excluded from the count
    role: condition
    status: modeled
    span:
      start: 0
      end: 74
    subjects:
      - organizations.get_organization_count
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1515'
  recorded_at: '2025-11-15T17:24:50.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-some-organizations-are-soft-deleted-they-are
type: req
---
When some organizations are soft-deleted, they are excluded from the count.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.repository.test.ts (organizations repository > getOrganizationCount).

## Source

Source: Papra server behaviour notes - SRV-1515
