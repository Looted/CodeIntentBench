---
title: When resetAt is in the past, returns a duration of 0.
status: active
semantic_text: When resetAt is in the past, returns a duration of 0.
semantic_clauses:
  - When resetAt is in the past, returns a duration of 0
logic_claims:
  - CLAIM-92C3D4E99372B9CB
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: cc692ec268ebcf3a987d160ab4f07c56007adb6c4710973202673610b1fd6121
semantic_inventory:
  - claim_key: CLAIM-92C3D4E99372B9CB
    claim_text: When resetAt is in the past, returns a duration of 0
    role: condition
    status: modeled
    span:
      start: 0
      end: 52
    subjects:
      - rate_limit.compute_retry_after_duration
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-562'
  recorded_at: '2026-03-23T12:39:26.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:rate-limit
id: REQ-papra-rate-limit-resetat-is-in-past-returns-duration-of
type: req
---
When resetAt is in the past, returns a duration of 0.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/app/rate-limit/rate-limit.models.test.ts (rate-limit.models > computeRetryAfterDuration).

## Source

Source: Papra server behaviour notes - SRV-562
