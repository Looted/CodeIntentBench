---
title: Connected organization names in the browser extension are between 3 and 32 characters long.
status: active
semantic_text: Connected organization names in the browser extension are between 3 and 32 characters long.
semantic_clauses:
  - Connected organization names in the browser extension are between 3 and 32 characters long
logic_claims:
  - CLAIM-29C854773921B0EE
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0a3030e8a6abbd7ff1d8deea99c6615a98afdc14f0a7c827d6fba838899a81ce
semantic_inventory:
  - claim_key: CLAIM-29C854773921B0EE
    claim_text: Connected organization names in the browser extension are between 3 and 32 characters long
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 90
    subjects:
      - extension.connected_organizations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Browser extension decision log: EXT-311'
  recorded_at: '2025-11-08T13:42:45.000Z'
tags:
  - bootstrap
  - knowledge-source:extension-decisions
  - component:extension
rationale: One-letter names were used for throwaway tests and never cleaned up.
id: REQ-extension-connected-organizations-name-length
type: req
---
Connected organization names in the browser extension are between 3 and 32 characters long.

## Context

One-letter names were used for throwaway tests and never cleaned up.

## Source

> feat(extension): connected organization name length (EXT-311)

Source: Browser extension decision log - EXT-311
