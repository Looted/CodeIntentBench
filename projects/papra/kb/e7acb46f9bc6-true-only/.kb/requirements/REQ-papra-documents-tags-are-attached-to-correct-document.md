---
title: Tags are attached to the correct document.
status: active
semantic_text: Tags are attached to the correct document.
semantic_clauses:
  - Tags are attached to the correct document
logic_claims:
  - CLAIM-198607D4B2C21103
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 691f0242bf2450275aad2d75122c1648af5b5c0c1ac72a1c526192d4eac85131
semantic_inventory:
  - claim_key: CLAIM-198607D4B2C21103
    claim_text: Tags are attached to the correct document
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 41
    subjects:
      - documents.enrich_documents_for_api
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1204'
  recorded_at: '2026-05-14T16:29:41.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-tags-are-attached-to-correct-document
type: req
---
Tags are attached to the correct document.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.usecases.test.ts (documents usecases > enrichDocumentsForApi).

## Source

Source: Papra server behaviour notes - SRV-1204
