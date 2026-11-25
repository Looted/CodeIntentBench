---
title: Uses the supplied document dates when generating a key for an existing document.
status: active
semantic_text: Uses the supplied document dates when generating a key for an existing document.
semantic_clauses:
  - Uses the supplied document dates when generating a key for an existing document
logic_claims:
  - CLAIM-698CB4DBBE173E1B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 4c1b1e839a4c2c5ab3a118c2ecfa427bf3422ef4744d07459f561a1d87070c50
semantic_inventory:
  - claim_key: CLAIM-698CB4DBBE173E1B
    claim_text: Uses the supplied document dates when generating a key for an existing document
    role: normative
    status: modeled
    span:
      start: 0
      end: 79
    subjects:
      - documents.create_document_storage_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1027'
  recorded_at: '2025-12-19T09:10:59.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-uses-supplied-document-dates-when-generating-key
type: req
---
Uses the supplied document dates when generating a key for an existing document.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-storage.usecases.test.ts (document-storage usecases > createDocumentStorageKey).

## Source

Source: Papra server behaviour notes - SRV-1027
