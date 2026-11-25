---
title: Writes a tagged/untagged activity log per changed pair in a single bulk insert.
status: active
semantic_text: Writes a tagged/untagged activity log per changed pair in a single bulk insert.
semantic_clauses:
  - Writes a tagged/untagged activity log per changed pair in a single bulk insert
logic_claims:
  - CLAIM-405D47C881814547
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 9a6c17a805058ca593c9b84f952550ead03838ec28f1f4a88d48bd3d12180626
semantic_inventory:
  - claim_key: CLAIM-405D47C881814547
    claim_text: Writes a tagged/untagged activity log per changed pair in a single bulk insert
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 78
    subjects:
      - documents.register_insert_activity_log_on_document_tags_changed_handler
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1266'
  recorded_at: '2025-02-03T16:51:45.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-writes-tagged-untagged-activity-log-per-changed
type: req
---
Writes a tagged/untagged activity log per changed pair in a single bulk insert.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/events/activity-log.document-tags-changed.test.ts (activity-log document-tags-changed > registerInsertActivityLogOnDocumentTagsChangedHandler).

## Source

Source: Papra server behaviour notes - SRV-1266
