---
title: Inserts one activity log entry per input in a single bulk insert.
status: active
semantic_text: Inserts one activity log entry per input in a single bulk insert.
semantic_clauses:
  - Inserts one activity log entry per input in a single bulk insert
logic_claims:
  - CLAIM-F78BDCF4C92B3F0B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: df7c439bbfe14235229377c394053cfe34a1886359b27714e46cdceedd369d0f
semantic_inventory:
  - claim_key: CLAIM-F78BDCF4C92B3F0B
    claim_text: Inserts one activity log entry per input in a single bulk insert
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 64
    subjects:
      - documents.register_documents_activity_log
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-730'
  recorded_at: '2025-11-10T17:27:20.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-inserts-one-activity-log-entry-per-input
type: req
---
Inserts one activity log entry per input in a single bulk insert.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-activity/document-activity.usecases.test.ts (document-activity usecases > registerDocumentsActivityLog).

## Source

Source: Papra server behaviour notes - SRV-730
