---
title: Does not fire a webhook for an empty side.
status: active
semantic_text: Does not fire a webhook for an empty side.
semantic_clauses:
  - Does not fire a webhook for an empty side
logic_claims:
  - CLAIM-2D8F0EE6B33D0C6E
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3e98970d68c61ec1b35e71c6ba38373095a6a31f6291651ac8227ca4c2dab866
semantic_inventory:
  - claim_key: CLAIM-2D8F0EE6B33D0C6E
    claim_text: Does not fire a webhook for an empty side
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 41
    subjects:
      - documents.register_trigger_webhooks_on_document_tags_changed_handler
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1274'
  recorded_at: '2026-05-10T17:19:04.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-does-not-fire-webhook-for-empty-side
type: req
---
Does not fire a webhook for an empty side.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/events/webhooks.document-tags-changed.test.ts (webhooks document-tags-changed > registerTriggerWebhooksOnDocumentTagsChangedHandler).

## Source

Source: Papra server behaviour notes - SRV-1274
