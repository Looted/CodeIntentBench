---
title: Multiple handlers registered for the same event are all called.
status: active
semantic_text: Multiple handlers registered for the same event are all called.
semantic_clauses:
  - Multiple handlers registered for the same event are all called
logic_claims:
  - CLAIM-AF0199B6C5BF0EDF
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 9746415a47333922359f13bba485f157d5f274c2db6ab6c5b3b23f6db056e325
semantic_inventory:
  - claim_key: CLAIM-AF0199B6C5BF0EDF
    claim_text: Multiple handlers registered for the same event are all called
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 62
    subjects:
      - events.emit_event
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-542'
  recorded_at: '2026-06-09T08:22:18.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:events
id: REQ-papra-events-multiple-handlers-registered-for-same-event-are
type: req
---
Multiple handlers registered for the same event are all called.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/app/events/events.services.test.ts (events services > emitEvent).

## Source

Source: Papra server behaviour notes - SRV-542
