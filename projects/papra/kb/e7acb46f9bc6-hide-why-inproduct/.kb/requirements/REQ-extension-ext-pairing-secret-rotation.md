---
title: EXT_PAIRING_SECRET is rotated every 30 days; the previous value stays valid for 72 hours after a rotation.
status: active
semantic_text: EXT_PAIRING_SECRET is rotated every 30 days; the previous value stays valid for 72 hours after a rotation.
semantic_clauses:
  - EXT_PAIRING_SECRET is rotated every 30 days
  - the previous value stays valid for 72 hours after a rotation
logic_claims:
  - CLAIM-DCAA76EA65CAA2DD
  - CLAIM-2B1E92178189FEAE
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: aa4e323a8433df307732f016bfc4234302cc77a14bd7af803343456a3fd9f532
semantic_inventory:
  - claim_key: CLAIM-DCAA76EA65CAA2DD
    claim_text: EXT_PAIRING_SECRET is rotated every 30 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 43
    subjects:
      - extension.ext_pairing_secret
  - claim_key: CLAIM-2B1E92178189FEAE
    claim_text: the previous value stays valid for 72 hours after a rotation
    role: descriptive
    status: modeled
    span:
      start: 45
      end: 105
    subjects:
      - extension.ext_pairing_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Browser extension decision log: EXT-208'
  recorded_at: '2026-04-17T10:49:19.000Z'
tags:
  - bootstrap
  - knowledge-source:extension-decisions
  - component:extension
id: REQ-extension-ext-pairing-secret-rotation
type: req
---
EXT_PAIRING_SECRET is rotated every 30 days; the previous value stays valid for 72 hours after a rotation.

## Context

Reason not stated.

## Source

> chore(extension): rotate EXT_PAIRING_SECRET every 30 days (EXT-208)

Source: Browser extension decision log - EXT-208
