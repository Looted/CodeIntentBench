---
title: The user can disable the document size limit by setting the maxUploadSize to 0 or less.
status: active
semantic_text: The user can disable the document size limit by setting the maxUploadSize to 0 or less.
semantic_clauses:
  - The user can disable the document size limit by setting the maxUploadSize to 0 or less
logic_claims:
  - CLAIM-F44B68350DE99F5C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 264b808ff787ba1bd54efff3d002600923ccc95f85049402c43e3e563c8e4513
semantic_inventory:
  - claim_key: CLAIM-F44B68350DE99F5C
    claim_text: The user can disable the document size limit by setting the maxUploadSize to 0 or less
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 86
    subjects:
      - documents.is_document_size_limit_enabled
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1122'
  recorded_at: '2026-04-26T15:30:03.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-user-can-disable-document-size-limit-by
type: req
---
The user can disable the document size limit by setting the maxUploadSize to 0 or less.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.models.test.ts (documents models > isDocumentSizeLimitEnabled).

## Source

Source: Papra server behaviour notes - SRV-1122
