---
title: The extension pairing service uses a fixed development value outside production when EXT_PAIRING_SECRET is not set.
status: active
semantic_text: The extension pairing service uses a fixed development value outside production when EXT_PAIRING_SECRET is not set.
semantic_clauses:
  - The extension pairing service uses a fixed development value outside production when EXT_PAIRING_SECRET is not set
logic_claims:
  - CLAIM-15C3FE1B9E860E58
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b192227212a87a7c8f202a92cb39bd7a6bdb60a5e6bd7f200e948443bbc362aa
semantic_inventory:
  - claim_key: CLAIM-15C3FE1B9E860E58
    claim_text: The extension pairing service uses a fixed development value outside production when EXT_PAIRING_SECRET is not set
    role: normative
    status: modeled
    span:
      start: 0
      end: 114
    subjects:
      - extension.ext_pairing_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Browser extension decision log: EXT-293'
  recorded_at: '2025-05-11T16:39:46.000Z'
tags:
  - bootstrap
  - knowledge-source:extension-decisions
  - component:extension
id: REQ-extension-ext-pairing-secret-development-default
type: req
---
The extension pairing service uses a fixed development value outside production when EXT_PAIRING_SECRET is not set.

## Context

Reason not stated.

## Source

> feat(extension): EXT_PAIRING_SECRET outside production (EXT-293)

Source: Browser extension decision log - EXT-293
