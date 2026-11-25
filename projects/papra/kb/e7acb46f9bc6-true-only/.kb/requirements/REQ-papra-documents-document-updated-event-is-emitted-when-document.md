---
title: A document.updated event is emitted when the document content is extracted and saved.
status: active
semantic_text: A document.updated event is emitted when the document content is extracted and saved.
semantic_clauses:
  - A document.updated event is emitted when the document content is extracted and saved
logic_claims:
  - CLAIM-7EFF39CC1E7F8141
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c92d63648f0c163713a10c702145a44abff9fad4e5018e509bd9cb95b067c28d
semantic_inventory:
  - claim_key: CLAIM-7EFF39CC1E7F8141
    claim_text: A document.updated event is emitted when the document content is extracted and saved
    role: normative
    status: modeled
    span:
      start: 0
      end: 84
    subjects:
      - documents.extract_and_save_document_file_content
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1175'
  recorded_at: '2025-12-13T09:13:27.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-document-updated-event-is-emitted-when-document
type: req
---
A document.updated event is emitted when the document content is extracted and saved.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.usecases.test.ts (documents usecases > extractAndSaveDocumentFileContent).

## Source

Source: Papra server behaviour notes - SRV-1175
