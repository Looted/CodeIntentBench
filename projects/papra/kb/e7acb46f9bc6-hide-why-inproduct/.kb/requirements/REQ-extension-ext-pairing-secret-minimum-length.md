---
title: EXT_PAIRING_SECRET must be at least 24 characters long.
status: active
semantic_text: EXT_PAIRING_SECRET must be at least 24 characters long.
semantic_clauses:
  - EXT_PAIRING_SECRET must be at least 24 characters long
logic_claims:
  - CLAIM-ED98A87CE6DF0A32
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 6b4fd54838071d78db089cf7c3ed7ee5a0bf9d8f673d435a9130d151811d278e
semantic_inventory:
  - claim_key: CLAIM-ED98A87CE6DF0A32
    claim_text: EXT_PAIRING_SECRET must be at least 24 characters long
    role: normative
    status: modeled
    span:
      start: 0
      end: 54
    subjects:
      - extension.ext_pairing_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Browser extension decision log: EXT-195'
  recorded_at: '2025-10-24T15:48:21.000Z'
tags:
  - bootstrap
  - knowledge-source:extension-decisions
  - component:extension
rationale: Short values of the pairing-code signing secret can be guessed offline from one signed value.
id: REQ-extension-ext-pairing-secret-minimum-length
type: req
---
EXT_PAIRING_SECRET must be at least 24 characters long.

## Context

Short values of the pairing-code signing secret can be guessed offline from one signed value.

## Why this changed

Reason not stated. EXT-195 replaces the value recorded in EXT-140 without saying why it changed.

## Source

> feat(extension): EXT_PAIRING_SECRET minimum length 24 (EXT-195)

Source: Browser extension decision log - EXT-195
