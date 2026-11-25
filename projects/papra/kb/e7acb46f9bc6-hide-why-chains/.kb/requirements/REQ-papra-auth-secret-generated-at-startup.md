---
title: When AUTH_SECRET is not set in production, the server generates a random secret at startup and logs a warning.
status: closed
semantic_text: When AUTH_SECRET is not set in production, the server generates a random secret at startup and logs a warning.
semantic_clauses:
  - When AUTH_SECRET is not set in production, the server generates a random secret at startup and logs a warning
logic_claims:
  - CLAIM-9D410B420499DA8B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0bd95a6c377491706702a60509229a069f1cf14736806207d89fd1859e761eee
semantic_inventory:
  - claim_key: CLAIM-9D410B420499DA8B
    claim_text: When AUTH_SECRET is not set in production, the server generates a random secret at startup and logs a warning
    role: condition
    status: modeled
    span:
      start: 0
      end: 109
    subjects:
      - auth.secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server decision log: SRV-139'
  recorded_at: '2025-08-26T13:31:19.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-decisions
  - component:auth
id: REQ-papra-auth-secret-generated-at-startup
type: req
---
When AUTH_SECRET is not set in production, the server generates a random secret at startup and logs a warning.

## Context

Reason not stated.

## Why this changed

A shared built-in default would let anyone sign sessions for an instance that kept it.

## Source

> In production a missing AUTH_SECRET is replaced by a random one generated at startup, with a warning in the logs. (SRV-139)

Source: Papra server decision log - SRV-139
