---
title: EXT_PAIRING_SECRET must be at least 16 characters long.
status: closed
semantic_text: EXT_PAIRING_SECRET must be at least 16 characters long.
semantic_clauses:
  - EXT_PAIRING_SECRET must be at least 16 characters long
logic_claims:
  - CLAIM-7763EB4897F83A45
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f9cbffb135960c1895cde6dcc3bb2c83bd560c28e80bff06103553b5413edabe
semantic_inventory:
  - claim_key: CLAIM-7763EB4897F83A45
    claim_text: EXT_PAIRING_SECRET must be at least 16 characters long
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
  ref: 'Browser extension decision log: EXT-140'
  recorded_at: '2025-03-19T15:34:42.000Z'
tags:
  - bootstrap
  - knowledge-source:extension-decisions
  - component:extension
id: REQ-extension-ext-pairing-secret-minimum-length-earlier
type: req
---
EXT_PAIRING_SECRET must be at least 16 characters long.

## Context

Reason not stated.

## Source

> feat(extension): EXT_PAIRING_SECRET minimum length 24 (EXT-140)

Source: Browser extension decision log - EXT-140
