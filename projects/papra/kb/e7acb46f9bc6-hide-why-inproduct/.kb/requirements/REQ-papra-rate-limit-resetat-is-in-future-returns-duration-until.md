---
title: When resetAt is in the future, returns the duration until resetAt in seconds.
status: active
semantic_text: When resetAt is in the future, returns the duration until resetAt in seconds.
semantic_clauses:
  - When resetAt is in the future, returns the duration until resetAt in seconds
logic_claims:
  - CLAIM-1B01DF2035DA27A4
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: dd99fddb6c9fd8eb69c4b89bb3f61bcb9a2eea900c244be1de5dfea8a85b3b64
semantic_inventory:
  - claim_key: CLAIM-1B01DF2035DA27A4
    claim_text: When resetAt is in the future, returns the duration until resetAt in seconds
    role: condition
    status: modeled
    span:
      start: 0
      end: 76
    subjects:
      - rate_limit.compute_retry_after_duration
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-560'
  recorded_at: '2026-04-26T13:02:18.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:rate-limit
id: REQ-papra-rate-limit-resetat-is-in-future-returns-duration-until
type: req
---
When resetAt is in the future, returns the duration until resetAt in seconds.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/app/rate-limit/rate-limit.models.test.ts (rate-limit.models > computeRetryAfterDuration).

## Source

Source: Papra server behaviour notes - SRV-560
