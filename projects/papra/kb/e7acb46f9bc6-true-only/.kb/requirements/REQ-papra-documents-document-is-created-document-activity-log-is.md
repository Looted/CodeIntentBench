---
title: When a document is created, a document activity log is registered.
status: active
semantic_text: When a document is created, a document activity log is registered.
semantic_clauses:
  - When a document is created, a document activity log is registered
logic_claims:
  - CLAIM-BEDB9716761F8AE1
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: dc952017b963b6ab19ecda1d26b82868ab6351576c658db2b9f845dc939dc97f
semantic_inventory:
  - claim_key: CLAIM-BEDB9716761F8AE1
    claim_text: When a document is created, a document activity log is registered
    role: condition
    status: modeled
    span:
      start: 0
      end: 65
    subjects:
      - documents.register_insert_activity_log_on_document_created_handler
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1265'
  recorded_at: '2026-09-10T10:55:56.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-document-is-created-document-activity-log-is
type: req
---
When a document is created, a document activity log is registered.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/events/activity-log.document-created.test.ts (activity-log document-created > registerInsertActivityLogOnDocumentCreatedHandler).

## Source

Source: Papra server behaviour notes - SRV-1265
