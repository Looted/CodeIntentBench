---
title: Parses rate limit config, like "10/2h", "2/5m", into a maxHits and window in Temporal.Duration.
status: active
semantic_text: Parses rate limit config, like "10/2h", "2/5m", into a maxHits and window in Temporal.Duration.
semantic_clauses:
  - Parses rate limit config, like "10/2h", "2/5m", into a maxHits and window in Temporal.Duration
logic_claims:
  - CLAIM-5C0FE07505686C3C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 349b956f5d13054bb9c55e056a2405a22e623f4fcf77ebb2d1ee865ebb84ce0a
semantic_inventory:
  - claim_key: CLAIM-5C0FE07505686C3C
    claim_text: Parses rate limit config, like "10/2h", "2/5m", into a maxHits and window in Temporal.Duration
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 94
    subjects:
      - rate_limit.parse_rate_limit_config
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-552'
  recorded_at: '2025-09-06T14:18:15.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:rate-limit
id: REQ-papra-rate-limit-parses-rate-limit-config-like-10-2h
type: req
---
Parses rate limit config, like "10/2h", "2/5m", into a maxHits and window in Temporal.Duration.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/app/rate-limit/rate-limit.config.models.test.ts (rate-limit.config.models > parseRateLimitConfig).

## Source

Source: Papra server behaviour notes - SRV-552
