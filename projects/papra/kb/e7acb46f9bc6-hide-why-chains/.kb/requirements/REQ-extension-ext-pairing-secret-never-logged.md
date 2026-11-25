---
title: The extension pairing service never writes EXT_PAIRING_SECRET or a value derived from it to its logs; startup logs show only whether it is set.
status: active
semantic_text: The extension pairing service never writes EXT_PAIRING_SECRET or a value derived from it to its logs; startup logs show only whether it is set.
semantic_clauses:
  - The extension pairing service never writes EXT_PAIRING_SECRET or a value derived from it to its logs
  - startup logs show only whether it is set
logic_claims:
  - CLAIM-B5F1BB798B0C8E6A
  - CLAIM-2AB50BBAACA14801
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 632398c559eaa2263e5f2b59ecdf9bc4a846492579d39c03da4b0c2a406d7d1a
semantic_inventory:
  - claim_key: CLAIM-B5F1BB798B0C8E6A
    claim_text: The extension pairing service never writes EXT_PAIRING_SECRET or a value derived from it to its logs
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 100
    subjects:
      - extension.ext_pairing_secret
  - claim_key: CLAIM-2AB50BBAACA14801
    claim_text: startup logs show only whether it is set
    role: descriptive
    status: modeled
    span:
      start: 102
      end: 142
    subjects:
      - extension.ext_pairing_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Browser extension decision log: EXT-291'
  recorded_at: '2026-08-21T10:13:35.000Z'
tags:
  - bootstrap
  - knowledge-source:extension-decisions
  - component:extension
id: REQ-extension-ext-pairing-secret-never-logged
type: req
---
The extension pairing service never writes EXT_PAIRING_SECRET or a value derived from it to its logs; startup logs show only whether it is set.

## Context

Reason not stated.

## Source

> fix(extension): keep EXT_PAIRING_SECRET out of logs (EXT-291)

Source: Browser extension decision log - EXT-291
