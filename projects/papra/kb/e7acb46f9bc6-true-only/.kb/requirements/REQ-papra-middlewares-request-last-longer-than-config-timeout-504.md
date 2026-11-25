---
title: When a request last longer than the config timeout, a 504 error is raised.
status: active
semantic_text: When a request last longer than the config timeout, a 504 error is raised.
semantic_clauses:
  - When a request last longer than the config timeout, a 504 error is raised
logic_claims:
  - CLAIM-F37301C0BECB2AE9
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 25501734be81d1c77a6050f0885dd8b2cd97159a77b8450719104e007e967cd3
semantic_inventory:
  - claim_key: CLAIM-F37301C0BECB2AE9
    claim_text: When a request last longer than the config timeout, a 504 error is raised
    role: condition
    status: modeled
    span:
      start: 0
      end: 73
    subjects:
      - middlewares.timeout_middleware
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-550'
  recorded_at: '2025-08-28T14:55:43.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:middlewares
id: REQ-papra-middlewares-request-last-longer-than-config-timeout-504
type: req
---
When a request last longer than the config timeout, a 504 error is raised.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/app/middlewares/timeout.middleware.test.ts (middlewares > timeoutMiddleware).

## Source

Source: Papra server behaviour notes - SRV-550
