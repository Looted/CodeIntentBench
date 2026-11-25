---
title: Check if a given list of document IDs all belong to the organization.
status: active
semantic_text: Check if a given list of document IDs all belong to the organization.
semantic_clauses:
  - Check if a given list of document IDs all belong to the organization
logic_claims:
  - CLAIM-2445734278D297D5
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ff03b655a8089f1aed9712dfd82b8f0f9032c81c171ab7e8dce7ad3847c8368a
semantic_inventory:
  - claim_key: CLAIM-2445734278D297D5
    claim_text: Check if a given list of document IDs all belong to the organization
    role: normative
    status: modeled
    span:
      start: 0
      end: 68
    subjects:
      - documents.are_all_documents_in_organization
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1127'
  recorded_at: '2025-10-16T11:11:23.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-check-if-given-list-of-document-ids
type: req
---
Check if a given list of document IDs all belong to the organization.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.repository.test.ts (documents repository > areAllDocumentsInOrganization).

## Source

Source: Papra server behaviour notes - SRV-1127
