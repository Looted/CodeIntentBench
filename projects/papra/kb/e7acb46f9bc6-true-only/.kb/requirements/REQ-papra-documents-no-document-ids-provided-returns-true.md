---
title: No document IDs provided, returns true.
status: active
semantic_text: No document IDs provided, returns true.
semantic_clauses:
  - No document IDs provided, returns true
logic_claims:
  - CLAIM-10A10440170C74E1
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a3732aaa67114aec3ed23abc040f4871026fc56a4e7ff57a9b368b03231a854a
semantic_inventory:
  - claim_key: CLAIM-10A10440170C74E1
    claim_text: No document IDs provided, returns true
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 38
    subjects:
      - documents.are_all_documents_in_organization
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1132'
  recorded_at: '2025-12-20T09:01:23.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-no-document-ids-provided-returns-true
type: req
---
No document IDs provided, returns true.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.repository.test.ts (documents repository > areAllDocumentsInOrganization).

## Source

Source: Papra server behaviour notes - SRV-1132
