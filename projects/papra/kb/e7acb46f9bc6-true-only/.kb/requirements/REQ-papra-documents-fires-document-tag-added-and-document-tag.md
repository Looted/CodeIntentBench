---
title: Fires a document:tag:added and a document:tag:removed webhook for the changed pairs.
status: active
semantic_text: Fires a document:tag:added and a document:tag:removed webhook for the changed pairs.
semantic_clauses:
  - Fires a document:tag:added and a document:tag:removed webhook for the changed pairs
logic_claims:
  - CLAIM-10CB33AF460DB77D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 88962b80489eff1435734cc77a7f14b77ec90260f38edd20315f395a6a37b18c
semantic_inventory:
  - claim_key: CLAIM-10CB33AF460DB77D
    claim_text: Fires a document:tag:added and a document:tag:removed webhook for the changed pairs
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 83
    subjects:
      - documents.register_trigger_webhooks_on_document_tags_changed_handler
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1275'
  recorded_at: '2025-03-19T12:05:03.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-fires-document-tag-added-and-document-tag
type: req
---
Fires a document:tag:added and a document:tag:removed webhook for the changed pairs.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/events/webhooks.document-tags-changed.test.ts (webhooks document-tags-changed > registerTriggerWebhooksOnDocumentTagsChangedHandler).

## Source

Source: Papra server behaviour notes - SRV-1275
