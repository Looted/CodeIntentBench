---
title: Retrieves all tags for an organization along with the number of non-deleted documents associated with each tag ordered by creation date descending.
status: active
semantic_text: Retrieves all tags for an organization along with the number of non-deleted documents associated with each tag ordered by creation date descending.
semantic_clauses:
  - Retrieves all tags for an organization along with the number of non-deleted documents associated with each tag ordered by creation date descending
logic_claims:
  - CLAIM-9249B3E10427D734
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 891eba79d1cfec65a7b3d54bde02d9a43f25bd9893225bcda65a309679773033
semantic_inventory:
  - claim_key: CLAIM-9249B3E10427D734
    claim_text: Retrieves all tags for an organization along with the number of non-deleted documents associated with each tag ordered by creation date descending
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 146
    subjects:
      - tags.get_organization_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1833'
  recorded_at: '2026-03-13T16:22:43.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:tags
id: REQ-papra-tags-retrieves-all-tags-for-organization-along-with
type: req
---
Retrieves all tags for an organization along with the number of non-deleted documents associated with each tag ordered by creation date descending.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/tags/tags.repository.test.ts (tags repository > getOrganizationTags).

## Source

Source: Papra server behaviour notes - SRV-1833
