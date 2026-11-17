---
title: The license server refuses to start in production without LICENSE_SIGNING_KEY.
status: active
semantic_text: The license server refuses to start in production without LICENSE_SIGNING_KEY.
semantic_clauses:
  - The license server refuses to start in production without LICENSE_SIGNING_KEY
logic_claims:
  - CLAIM-2C0D6650914EFF94
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 25ffc28254f8cf3c46c0b58659ca660bfce108741a326905ba041148b038f583
semantic_inventory:
  - claim_key: CLAIM-2C0D6650914EFF94
    claim_text: The license server refuses to start in production without LICENSE_SIGNING_KEY
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 77
    subjects:
      - license.license_signing_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'License server decision log: LIC-141'
  recorded_at: '2025-09-08T15:51:46.000Z'
tags:
  - bootstrap
  - knowledge-source:license-decisions
  - component:license
rationale: Starting without the license signing key meant every value signed before the restart stopped verifying.
id: REQ-license-license-signing-key-required-in-production
type: req
---
The license server refuses to start in production without LICENSE_SIGNING_KEY.

## Context

Starting without the license signing key meant every value signed before the restart stopped verifying.

## Source

> feat(license): require LICENSE_SIGNING_KEY in production (LIC-141)

Source: License server decision log - LIC-141
