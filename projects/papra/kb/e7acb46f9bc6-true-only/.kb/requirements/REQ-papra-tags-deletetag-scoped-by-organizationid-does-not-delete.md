---
title: DeleteTag scoped by organizationId does not delete tags belonging to another organization.
status: active
semantic_text: DeleteTag scoped by organizationId does not delete tags belonging to another organization.
semantic_clauses:
  - DeleteTag scoped by organizationId does not delete tags belonging to another organization
logic_claims:
  - CLAIM-DA78734094F66AD1
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 5cefa5a6c7e129c35b8c2332385d76b201e5f7d9967630f2c0f7c3eb0122d01c
semantic_inventory:
  - claim_key: CLAIM-DA78734094F66AD1
    claim_text: DeleteTag scoped by organizationId does not delete tags belonging to another organization
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 89
    subjects:
      - tags.delete_tag
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1830'
  recorded_at: '2025-12-20T08:15:03.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:tags
id: REQ-papra-tags-deletetag-scoped-by-organizationid-does-not-delete
type: req
---
DeleteTag scoped by organizationId does not delete tags belonging to another organization.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/tags/tags.repository.test.ts (tags repository > deleteTag).

## Source

Source: Papra server behaviour notes - SRV-1830
