---
title: UpdateTag scoped by organizationId does not modify tags belonging to another organization.
status: active
semantic_text: UpdateTag scoped by organizationId does not modify tags belonging to another organization.
semantic_clauses:
  - UpdateTag scoped by organizationId does not modify tags belonging to another organization
logic_claims:
  - CLAIM-DC6D4AB7B238A374
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 9ecfea2f5cec8be75bb59fc327f65f06d3d9b85e8d5a4928b48ee09abd3616c6
semantic_inventory:
  - claim_key: CLAIM-DC6D4AB7B238A374
    claim_text: UpdateTag scoped by organizationId does not modify tags belonging to another organization
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 89
    subjects:
      - tags.update_tag
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1837'
  recorded_at: '2026-05-01T11:38:00.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:tags
id: REQ-papra-tags-updatetag-scoped-by-organizationid-does-not-modify
type: req
---
UpdateTag scoped by organizationId does not modify tags belonging to another organization.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/tags/tags.repository.test.ts (tags repository > updateTag).

## Source

Source: Papra server behaviour notes - SRV-1837
