---
title: The license server refuses the example value of LICENSE_SIGNING_KEY from its documentation, in every environment.
status: active
semantic_text: The license server refuses the example value of LICENSE_SIGNING_KEY from its documentation, in every environment.
semantic_clauses:
  - The license server refuses the example value of LICENSE_SIGNING_KEY from its documentation, in every environment
logic_claims:
  - CLAIM-00CBD26B78407DE7
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 432e21f0d8b2a952865de10696137801ac9daf3967bcca8e09b7c225bd760e7e
semantic_inventory:
  - claim_key: CLAIM-00CBD26B78407DE7
    claim_text: The license server refuses the example value of LICENSE_SIGNING_KEY from its documentation, in every environment
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 112
    subjects:
      - license.license_signing_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'License server decision log: LIC-151'
  recorded_at: '2025-03-15T17:23:11.000Z'
tags:
  - bootstrap
  - knowledge-source:license-decisions
  - component:license
rationale: The example value was found in use on public deployments.
id: REQ-license-license-signing-key-example-value-refused
type: req
---
The license server refuses the example value of LICENSE_SIGNING_KEY from its documentation, in every environment.

## Context

The example value was found in use on public deployments.

## Source

> feat(license): refuse the documented example LICENSE_SIGNING_KEY (LIC-151)

Source: License server decision log - LIC-151
