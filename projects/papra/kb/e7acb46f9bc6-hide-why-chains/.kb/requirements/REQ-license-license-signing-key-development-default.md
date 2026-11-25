---
title: The license server requires LICENSE_SIGNING_KEY in every environment, development included.
status: active
semantic_text: The license server requires LICENSE_SIGNING_KEY in every environment, development included.
semantic_clauses:
  - The license server requires LICENSE_SIGNING_KEY in every environment, development included
logic_claims:
  - CLAIM-AA7382DA0679ED53
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: fcac27410c156f0440164703085bf83facec61584414ceac10154ada42f3b94c
semantic_inventory:
  - claim_key: CLAIM-AA7382DA0679ED53
    claim_text: The license server requires LICENSE_SIGNING_KEY in every environment, development included
    role: normative
    status: modeled
    span:
      start: 0
      end: 90
    subjects:
      - license.license_signing_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'License server decision log: LIC-159'
  recorded_at: '2026-07-08T17:27:19.000Z'
tags:
  - bootstrap
  - knowledge-source:license-decisions
  - component:license
id: REQ-license-license-signing-key-development-default
type: req
---
The license server requires LICENSE_SIGNING_KEY in every environment, development included.

## Context

Reason not stated.

## Source

> feat(license): LICENSE_SIGNING_KEY outside production (LIC-159)

Source: License server decision log - LIC-159
