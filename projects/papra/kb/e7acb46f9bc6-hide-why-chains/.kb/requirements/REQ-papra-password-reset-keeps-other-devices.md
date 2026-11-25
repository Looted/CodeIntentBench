---
title: Resetting a password keeps the user's other sessions signed in.
status: closed
semantic_text: Resetting a password keeps the user's other sessions signed in.
semantic_clauses:
  - Resetting a password keeps the user's other sessions signed in
logic_claims:
  - CLAIM-6CF2C2C3A894B63E
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: dc8b9856964e1db1bab13492566948e1f2e722d668bdbf6e2601e3416801d889
semantic_inventory:
  - claim_key: CLAIM-6CF2C2C3A894B63E
    claim_text: Resetting a password keeps the user's other sessions signed in
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 62
    subjects:
      - auth.password_reset
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server decision log: SRV-151'
  recorded_at: '2025-10-07T14:26:52.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-decisions
  - component:auth
id: REQ-papra-password-reset-keeps-other-devices
type: req
---
Resetting a password keeps the user's other sessions signed in.

## Context

Reason not stated.

## Why this changed

Mobile users were signed out of the app every time they reset a forgotten password on the web.

## Source

> A password reset no longer signs the user out of their other devices. (SRV-151)

Source: Papra server decision log - SRV-151
