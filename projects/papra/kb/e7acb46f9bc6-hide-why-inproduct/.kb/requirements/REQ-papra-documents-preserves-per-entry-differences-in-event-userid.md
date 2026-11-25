---
title: Preserves per-entry differences in event, userId, and eventData.
status: active
semantic_text: Preserves per-entry differences in event, userId, and eventData.
semantic_clauses:
  - Preserves per-entry differences in event, userId, and eventData
logic_claims:
  - CLAIM-4F4FC7CC37E19200
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 473fa05cf24124a3069dc497bd8670b8176bdf808291662fd8b2ba6453ac866f
semantic_inventory:
  - claim_key: CLAIM-4F4FC7CC37E19200
    claim_text: Preserves per-entry differences in event, userId, and eventData
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 63
    subjects:
      - documents.register_documents_activity_log
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-735'
  recorded_at: '2026-07-01T15:00:29.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-preserves-per-entry-differences-in-event-userid
type: req
---
Preserves per-entry differences in event, userId, and eventData.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-activity/document-activity.usecases.test.ts (document-activity usecases > registerDocumentsActivityLog).

## Source

Source: Papra server behaviour notes - SRV-735
