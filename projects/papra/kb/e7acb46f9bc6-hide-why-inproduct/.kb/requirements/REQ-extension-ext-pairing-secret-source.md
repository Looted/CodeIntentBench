---
title: The extension pairing service reads EXT_PAIRING_SECRET from the environment only, never from a configuration file.
status: active
semantic_text: The extension pairing service reads EXT_PAIRING_SECRET from the environment only, never from a configuration file.
semantic_clauses:
  - The extension pairing service reads EXT_PAIRING_SECRET from the environment only, never from a configuration file
logic_claims:
  - CLAIM-02AFADF9236B6C33
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: bbb0cf7496552570d13efc17f2179d42c0c066d58cf742faafc02bb0b3999ef3
semantic_inventory:
  - claim_key: CLAIM-02AFADF9236B6C33
    claim_text: The extension pairing service reads EXT_PAIRING_SECRET from the environment only, never from a configuration file
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 113
    subjects:
      - extension.ext_pairing_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Browser extension decision log: EXT-211'
  recorded_at: '2026-05-08T10:19:05.000Z'
tags:
  - bootstrap
  - knowledge-source:extension-decisions
  - component:extension
id: REQ-extension-ext-pairing-secret-source
type: req
---
The extension pairing service reads EXT_PAIRING_SECRET from the environment only, never from a configuration file.

## Context

Reason not stated.

## Source

> feat(extension): where EXT_PAIRING_SECRET is read from (EXT-211)

Source: Browser extension decision log - EXT-211
