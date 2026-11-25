---
title: The extension pairing service refuses the example value of EXT_PAIRING_SECRET from its documentation, in every environment.
status: active
semantic_text: The extension pairing service refuses the example value of EXT_PAIRING_SECRET from its documentation, in every environment.
semantic_clauses:
  - The extension pairing service refuses the example value of EXT_PAIRING_SECRET from its documentation, in every environment
logic_claims:
  - CLAIM-A7D7C3AC0AB1179B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 4d721f610d9f664d72524098725f4b782cb93d4c107c6887813a30425c012dd1
semantic_inventory:
  - claim_key: CLAIM-A7D7C3AC0AB1179B
    claim_text: The extension pairing service refuses the example value of EXT_PAIRING_SECRET from its documentation, in every environment
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 122
    subjects:
      - extension.ext_pairing_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Browser extension decision log: EXT-280'
  recorded_at: '2025-11-01T10:52:04.000Z'
tags:
  - bootstrap
  - knowledge-source:extension-decisions
  - component:extension
rationale: The example value was found in use on public deployments.
id: REQ-extension-ext-pairing-secret-example-value-refused
type: req
---
The extension pairing service refuses the example value of EXT_PAIRING_SECRET from its documentation, in every environment.

## Context

The example value was found in use on public deployments.

## Source

> feat(extension): refuse the documented example EXT_PAIRING_SECRET (EXT-280)

Source: Browser extension decision log - EXT-280
