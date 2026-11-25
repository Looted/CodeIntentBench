---
title: Creates a new webhook and saves the events in the webhook_events table.
status: active
semantic_text: Creates a new webhook and saves the events in the webhook_events table.
semantic_clauses:
  - Creates a new webhook and saves the events in the webhook_events table
logic_claims:
  - CLAIM-646E5EA023102D41
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e25b9de6bcff1807ae0353137ad2f2ec76f4cf59ac31ebf834542f196da2a828
semantic_inventory:
  - claim_key: CLAIM-646E5EA023102D41
    claim_text: Creates a new webhook and saves the events in the webhook_events table
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 70
    subjects:
      - webhooks.create_webhook
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1880'
  recorded_at: '2025-05-23T11:23:59.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:webhooks
id: REQ-papra-webhooks-creates-new-webhook-and-saves-events-in
type: req
---
Creates a new webhook and saves the events in the webhook_events table.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/webhooks/webhooks.usecases.test.ts (webhook usecases > createWebhook).

## Source

Source: Papra server behaviour notes - SRV-1880
