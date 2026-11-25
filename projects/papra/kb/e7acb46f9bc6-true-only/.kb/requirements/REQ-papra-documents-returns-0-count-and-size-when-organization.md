---
title: Returns 0 count and size when organization does not exist.
status: active
semantic_text: Returns 0 count and size when organization does not exist.
semantic_clauses:
  - Returns 0 count and size when organization does not exist
logic_claims:
  - CLAIM-A52D58283DD80443
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 77ff8d85f701e1ae8731ff9984e8d50d2622348837b75d82112527045ea38233
semantic_inventory:
  - claim_key: CLAIM-A52D58283DD80443
    claim_text: Returns 0 count and size when organization does not exist
    role: normative
    status: modeled
    span:
      start: 0
      end: 57
    subjects:
      - documents.get_organization_stats
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1139'
  recorded_at: '2026-05-12T08:16:31.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-returns-0-count-and-size-when-organization
type: req
---
Returns 0 count and size when organization does not exist.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.repository.test.ts (documents repository > getOrganizationStats).

## Source

Source: Papra server behaviour notes - SRV-1139
