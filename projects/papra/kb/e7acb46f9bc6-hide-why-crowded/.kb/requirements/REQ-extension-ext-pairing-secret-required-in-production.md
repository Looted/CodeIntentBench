---
title: The extension pairing service refuses to start in production without EXT_PAIRING_SECRET.
status: active
semantic_text: The extension pairing service refuses to start in production without EXT_PAIRING_SECRET.
semantic_clauses:
  - The extension pairing service refuses to start in production without EXT_PAIRING_SECRET
logic_claims:
  - CLAIM-7E2B1FEFDC1313C1
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 053548e64c5649755a198e0eb91fce40e91e7cd4e7831c909d5f8e42119195fc
semantic_inventory:
  - claim_key: CLAIM-7E2B1FEFDC1313C1
    claim_text: The extension pairing service refuses to start in production without EXT_PAIRING_SECRET
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 87
    subjects:
      - extension.ext_pairing_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Browser extension decision log: EXT-267'
  recorded_at: '2026-09-14T12:03:50.000Z'
tags:
  - bootstrap
  - knowledge-source:extension-decisions
  - component:extension
rationale: Starting without the pairing-code signing secret meant every value signed before the restart stopped verifying.
id: REQ-extension-ext-pairing-secret-required-in-production
type: req
---
The extension pairing service refuses to start in production without EXT_PAIRING_SECRET.

## Context

Starting without the pairing-code signing secret meant every value signed before the restart stopped verifying.

## Source

> feat(extension): require EXT_PAIRING_SECRET in production (EXT-267)

Source: Browser extension decision log - EXT-267
