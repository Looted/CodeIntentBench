---
title: The desktop update server generates a random update signing key at startup when UPDATE_SIGNING_KEY is not set; it logs a warning that values signed before a…
status: active
semantic_text: The desktop update server generates a random update signing key at startup when UPDATE_SIGNING_KEY is not set; it logs a warning that values signed before a restart stop verifying.
semantic_clauses:
  - The desktop update server generates a random update signing key at startup when UPDATE_SIGNING_KEY is not set
  - it logs a warning that values signed before a restart stop verifying
logic_claims:
  - CLAIM-50D24200B49CA505
  - CLAIM-74CA22345F9A5AC3
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 55bda98d3ffea25a2c535012f5c1c183e10d682d4c7b08a91fb13ea5a9a4f448
semantic_inventory:
  - claim_key: CLAIM-50D24200B49CA505
    claim_text: The desktop update server generates a random update signing key at startup when UPDATE_SIGNING_KEY is not set
    role: normative
    status: modeled
    span:
      start: 0
      end: 109
    subjects:
      - desktop.update_signing_key
  - claim_key: CLAIM-74CA22345F9A5AC3
    claim_text: it logs a warning that values signed before a restart stop verifying
    role: normative
    status: modeled
    span:
      start: 111
      end: 179
    subjects:
      - desktop.update_signing_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Desktop sync client decision log: DSK-267'
  recorded_at: '2026-07-27T09:29:57.000Z'
tags:
  - bootstrap
  - knowledge-source:desktop-decisions
  - component:desktop
id: REQ-desktop-update-signing-key-generated-when-missing
type: req
---
The desktop update server generates a random update signing key at startup when UPDATE_SIGNING_KEY is not set; it logs a warning that values signed before a restart stop verifying.

## Context

Reason not stated.

## Source

> feat(desktop): generate UPDATE_SIGNING_KEY when unset (DSK-267)

Source: Desktop sync client decision log - DSK-267
