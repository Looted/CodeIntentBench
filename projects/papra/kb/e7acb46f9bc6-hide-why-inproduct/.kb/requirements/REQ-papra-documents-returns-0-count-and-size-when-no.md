---
title: Returns 0 count and size when no documents are present.
status: active
semantic_text: Returns 0 count and size when no documents are present.
semantic_clauses:
  - Returns 0 count and size when no documents are present
logic_claims:
  - CLAIM-FAB0A4C481ED3AB9
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: eb2def44b2383c7d60946e137492f9306a6e9f6c3c880fccadb25ac79fca9171
semantic_inventory:
  - claim_key: CLAIM-FAB0A4C481ED3AB9
    claim_text: Returns 0 count and size when no documents are present
    role: normative
    status: modeled
    span:
      start: 0
      end: 54
    subjects:
      - documents.get_organization_stats
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1135'
  recorded_at: '2025-12-02T13:38:59.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-returns-0-count-and-size-when-no
type: req
---
Returns 0 count and size when no documents are present.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.repository.test.ts (documents repository > getOrganizationStats).

## Source

Source: Papra server behaviour notes - SRV-1135
