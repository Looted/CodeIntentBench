---
title: Non existing document ID returns false.
status: active
semantic_text: Non existing document ID returns false.
semantic_clauses:
  - Non existing document ID returns false
logic_claims:
  - CLAIM-C23D69F326D547FB
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 29df85524ce7e09fb49c6b67ddc8692965c3dfbb9aaa6968c8af3e13284d827e
semantic_inventory:
  - claim_key: CLAIM-C23D69F326D547FB
    claim_text: Non existing document ID returns false
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
  ref: 'Papra server behaviour notes: SRV-1133'
  recorded_at: '2026-05-15T17:15:59.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-non-existing-document-id-returns-false
type: req
---
Non existing document ID returns false.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.repository.test.ts (documents repository > areAllDocumentsInOrganization).

## Source

Source: Papra server behaviour notes - SRV-1133
