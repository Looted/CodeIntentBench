---
title: Validates and coerces a string to a boolean, used in the config where we accept env variables or js values.
status: active
semantic_text: Validates and coerces a string to a boolean, used in the config where we accept env variables or js values.
semantic_clauses:
  - Validates and coerces a string to a boolean, used in the config where we accept env variables or js values
logic_claims:
  - CLAIM-E49E2222C91701BC
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 86ac45eef7c9676cd884605a4baab7a786f05169c890b82457a322532dce6c73
semantic_inventory:
  - claim_key: CLAIM-E49E2222C91701BC
    claim_text: Validates and coerces a string to a boolean, used in the config where we accept env variables or js values
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 106
    subjects:
      - config.booleanish_schema
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-595'
  recorded_at: '2026-07-08T11:25:16.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:config
id: REQ-papra-config-validates-and-coerces-string-to-boolean-used
type: req
---
Validates and coerces a string to a boolean, used in the config where we accept env variables or js values.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/config/config.schemas.test.ts (config schemas > booleanishSchema).

## Source

Source: Papra server behaviour notes - SRV-595
