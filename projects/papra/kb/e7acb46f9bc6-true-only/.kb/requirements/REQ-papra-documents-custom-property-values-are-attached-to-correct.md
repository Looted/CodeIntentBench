---
title: Custom property values are attached to the correct document.
status: active
semantic_text: Custom property values are attached to the correct document.
semantic_clauses:
  - Custom property values are attached to the correct document
logic_claims:
  - CLAIM-27C11D7E47D7FEA1
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 4e4e336fc22189ea1c787ce64e6242b40ab8395cc89536f982bd323cf8073731
semantic_inventory:
  - claim_key: CLAIM-27C11D7E47D7FEA1
    claim_text: Custom property values are attached to the correct document
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 59
    subjects:
      - documents.enrich_documents_for_api
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1184'
  recorded_at: '2026-07-21T11:23:41.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-custom-property-values-are-attached-to-correct
type: req
---
Custom property values are attached to the correct document.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.usecases.test.ts (documents usecases > enrichDocumentsForApi).

## Source

Source: Papra server behaviour notes - SRV-1184
