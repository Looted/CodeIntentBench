---
title: When a non-internal custom error is thrown with a status code, the error is returned.
status: active
semantic_text: When a non-internal custom error is thrown with a status code, the error is returned.
semantic_clauses:
  - When a non-internal custom error is thrown with a status code, the error is returned
logic_claims:
  - CLAIM-ECDC59AFCE573E68
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e1998d94bb30611a109a04d851ee826155ee1c1a73fff49ea823bb5ece8d62e4
semantic_inventory:
  - claim_key: CLAIM-ECDC59AFCE573E68
    claim_text: When a non-internal custom error is thrown with a status code, the error is returned
    role: condition
    status: modeled
    span:
      start: 0
      end: 84
    subjects:
      - middlewares.register_error_middleware
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-549'
  recorded_at: '2025-11-06T13:43:13.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:middlewares
id: REQ-papra-middlewares-non-internal-custom-error-is-thrown-with
type: req
---
When a non-internal custom error is thrown with a status code, the error is returned.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/app/middlewares/errors.middleware.test.ts (errors middleware > registerErrorMiddleware).

## Source

Source: Papra server behaviour notes - SRV-549
