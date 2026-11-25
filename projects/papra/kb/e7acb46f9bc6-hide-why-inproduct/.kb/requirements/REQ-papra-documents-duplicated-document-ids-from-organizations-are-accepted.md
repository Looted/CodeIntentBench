---
title: Duplicated document IDs from the organizations are accepted and return true.
status: active
semantic_text: Duplicated document IDs from the organizations are accepted and return true.
semantic_clauses:
  - Duplicated document IDs from the organizations are accepted and return true
logic_claims:
  - CLAIM-674CC02A869A6A6A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 861c1c1d3863833cf67f5044a734ea5c16f002e701a11a8bdc1e3c9a12b19c45
semantic_inventory:
  - claim_key: CLAIM-674CC02A869A6A6A
    claim_text: Duplicated document IDs from the organizations are accepted and return true
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 75
    subjects:
      - documents.are_all_documents_in_organization
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1129'
  recorded_at: '2025-07-19T15:49:50.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-duplicated-document-ids-from-organizations-are-accepted
type: req
---
Duplicated document IDs from the organizations are accepted and return true.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.repository.test.ts (documents repository > areAllDocumentsInOrganization).

## Source

Source: Papra server behaviour notes - SRV-1129
