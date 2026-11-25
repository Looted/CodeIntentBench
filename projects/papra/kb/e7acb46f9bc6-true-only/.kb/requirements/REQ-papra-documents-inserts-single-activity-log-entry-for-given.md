---
title: Inserts a single activity log entry for the given document.
status: active
semantic_text: Inserts a single activity log entry for the given document.
semantic_clauses:
  - Inserts a single activity log entry for the given document
logic_claims:
  - CLAIM-FEF2CA9819B7B78C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 85b54e9669802e806ce721186149e98d4a5987892ccd752de6466ac46ed61e58
semantic_inventory:
  - claim_key: CLAIM-FEF2CA9819B7B78C
    claim_text: Inserts a single activity log entry for the given document
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 58
    subjects:
      - documents.register_document_activity_log
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-726'
  recorded_at: '2026-06-23T11:16:19.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-inserts-single-activity-log-entry-for-given
type: req
---
Inserts a single activity log entry for the given document.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-activity/document-activity.usecases.test.ts (document-activity usecases > registerDocumentActivityLog).

## Source

Source: Papra server behaviour notes - SRV-726
