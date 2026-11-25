---
title: Units can be seconds (s), minutes (m) or hours (h).
status: active
semantic_text: Units can be seconds (s), minutes (m) or hours (h).
semantic_clauses:
  - Units can be seconds (s), minutes (m) or hours (h)
logic_claims:
  - CLAIM-3E1075C4A44C1004
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 41a78cc4c96af61901155fbd1159fe612a54c58a284cb93fcc82ae19dd6b147e
semantic_inventory:
  - claim_key: CLAIM-3E1075C4A44C1004
    claim_text: Units can be seconds (s), minutes (m) or hours (h)
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 50
    subjects:
      - rate_limit.parse_rate_limit_config
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-556'
  recorded_at: '2025-03-03T10:33:15.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:rate-limit
id: REQ-papra-rate-limit-units-can-be-seconds-s-minutes-m
type: req
---
Units can be seconds (s), minutes (m) or hours (h).

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/app/rate-limit/rate-limit.config.models.test.ts (rate-limit.config.models > parseRateLimitConfig).

## Source

Source: Papra server behaviour notes - SRV-556
