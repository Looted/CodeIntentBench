---
title: Trims whitespace around the config string.
status: active
semantic_text: Trims whitespace around the config string.
semantic_clauses:
  - Trims whitespace around the config string
logic_claims:
  - CLAIM-057931861BE37B80
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 83c65a73edcdc71707d0fbbb519d06dcc1adbf1d3a5c89d7c03d6f141ccec5e6
semantic_inventory:
  - claim_key: CLAIM-057931861BE37B80
    claim_text: Trims whitespace around the config string
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 41
    subjects:
      - rate_limit.parse_rate_limit_config
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-553'
  recorded_at: '2026-02-10T12:23:28.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:rate-limit
id: REQ-papra-rate-limit-trims-whitespace-around-config-string
type: req
---
Trims whitespace around the config string.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/app/rate-limit/rate-limit.config.models.test.ts (rate-limit.config.models > parseRateLimitConfig).

## Source

Source: Papra server behaviour notes - SRV-553
