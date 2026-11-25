---
title: Registered handlers are called with the event payload when an event is emitted.
status: active
semantic_text: Registered handlers are called with the event payload when an event is emitted.
semantic_clauses:
  - Registered handlers are called with the event payload when an event is emitted
logic_claims:
  - CLAIM-953C261CB73BA9B6
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 056d6cec79c001121d24003c5f2354183efe0f0aa9db203487f220abfdfcc12d
semantic_inventory:
  - claim_key: CLAIM-953C261CB73BA9B6
    claim_text: Registered handlers are called with the event payload when an event is emitted
    role: normative
    status: modeled
    span:
      start: 0
      end: 78
    subjects:
      - events.emit_event
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-543'
  recorded_at: '2025-11-17T17:07:11.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:events
id: REQ-papra-events-registered-handlers-are-called-with-event-payload
type: req
---
Registered handlers are called with the event payload when an event is emitted.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/app/events/events.services.test.ts (events services > emitEvent).

## Source

Source: Papra server behaviour notes - SRV-543
