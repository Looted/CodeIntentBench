---
title: When a tag is assigned to only deleted documents, it is retrieved with 0 documents count.
status: active
semantic_text: When a tag is assigned to only deleted documents, it is retrieved with 0 documents count.
semantic_clauses:
  - When a tag is assigned to only deleted documents, it is retrieved with 0 documents count
logic_claims:
  - CLAIM-2CC740693F56C622
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: bdc6ad1ecbfc9e0b121375f91e9ab78b753452ce71d2ab9736c648fdeb1c76a9
semantic_inventory:
  - claim_key: CLAIM-2CC740693F56C622
    claim_text: When a tag is assigned to only deleted documents, it is retrieved with 0 documents count
    role: condition
    status: modeled
    span:
      start: 0
      end: 88
    subjects:
      - tags.get_organization_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1841'
  recorded_at: '2026-09-04T14:23:55.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:tags
id: REQ-papra-tags-tag-is-assigned-to-only-deleted-documents
type: req
---
When a tag is assigned to only deleted documents, it is retrieved with 0 documents count.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/tags/tags.repository.test.ts (tags repository > getOrganizationTags).

## Source

Source: Papra server behaviour notes - SRV-1841
