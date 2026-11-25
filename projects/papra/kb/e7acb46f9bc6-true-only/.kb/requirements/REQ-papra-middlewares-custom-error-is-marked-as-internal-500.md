---
title: When a custom error is marked as internal, a 500 error is returned with a generic message.
status: active
semantic_text: When a custom error is marked as internal, a 500 error is returned with a generic message.
semantic_clauses:
  - When a custom error is marked as internal, a 500 error is returned with a generic message
logic_claims:
  - CLAIM-6C86C01B42A140B4
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 034cf01cb4bd80ea318f539cba986ecf37d124b53b19072ec411827c90eefa81
semantic_inventory:
  - claim_key: CLAIM-6C86C01B42A140B4
    claim_text: When a custom error is marked as internal, a 500 error is returned with a generic message
    role: condition
    status: modeled
    span:
      start: 0
      end: 89
    subjects:
      - middlewares.register_error_middleware
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-548'
  recorded_at: '2026-08-13T15:59:17.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:middlewares
id: REQ-papra-middlewares-custom-error-is-marked-as-internal-500
type: req
---
When a custom error is marked as internal, a 500 error is returned with a generic message.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/app/middlewares/errors.middleware.test.ts (errors middleware > registerErrorMiddleware).

## Source

Source: Papra server behaviour notes - SRV-548
