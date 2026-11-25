---
title: Resetting a password revokes all of the user's sessions.
status: closed
semantic_text: Resetting a password revokes all of the user's sessions.
semantic_clauses:
  - Resetting a password revokes all of the user's sessions
logic_claims:
  - CLAIM-C96B0C216066BFFA
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 7691f5d5800624d01add24c6a401bf345d2c7482f07e9f6039a1c0507a755cce
semantic_inventory:
  - claim_key: CLAIM-C96B0C216066BFFA
    claim_text: Resetting a password revokes all of the user's sessions
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 55
    subjects:
      - auth.password_reset
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server decision log: SRV-102'
  recorded_at: '2025-05-20T08:03:11.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-decisions
  - component:auth
id: REQ-papra-password-reset-signs-out-everywhere
type: req
---
Resetting a password revokes all of the user's sessions.

## Context

Reason not stated.

## Source

> A password reset signs the user out of every device. (SRV-102)

Source: Papra server decision log - SRV-102
