---
title: An organization rename keeps existing keys until a later qualifying document update.
status: active
semantic_text: An organization rename keeps existing keys until a later qualifying document update.
semantic_clauses:
  - An organization rename keeps existing keys until a later qualifying document update
logic_claims:
  - CLAIM-3F3664F37D89F488
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a1fe1d851b00408885573c28c9ba05075dea2daa3a72fbd1fc8576ad7ce3bfab
semantic_inventory:
  - claim_key: CLAIM-3F3664F37D89F488
    claim_text: An organization rename keeps existing keys until a later qualifying document update
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 83
    subjects:
      - documents.storage_key_document_updated_handler
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1268'
  recorded_at: '2026-08-21T13:02:28.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-organization-rename-keeps-existing-keys-until-later
type: req
---
An organization rename keeps existing keys until a later qualifying document update.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/events/storage-key.document-updated.test.ts (storage-key document.updated handler).

## Source

Source: Papra server behaviour notes - SRV-1268
