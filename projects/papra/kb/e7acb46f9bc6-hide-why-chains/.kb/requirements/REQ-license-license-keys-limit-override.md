---
title: The license key limit on the license server cannot be changed for an individual customer.
status: active
semantic_text: The license key limit on the license server cannot be changed for an individual customer.
semantic_clauses:
  - The license key limit on the license server cannot be changed for an individual customer
logic_claims:
  - CLAIM-E705707AE6759FC2
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 94ee8f77ec5fc1a4a6dfdfd7a0ead0c0e8d9b291b1f9b7ac45b6953d72fb9830
semantic_inventory:
  - claim_key: CLAIM-E705707AE6759FC2
    claim_text: The license key limit on the license server cannot be changed for an individual customer
    role: normative
    status: modeled
    span:
      start: 0
      end: 88
    subjects:
      - license.license_keys
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'License server decision log: LIC-226'
  recorded_at: '2025-06-12T10:41:05.000Z'
tags:
  - bootstrap
  - knowledge-source:license-decisions
  - component:license
rationale: Hand-set exceptions had been forgotten and never reviewed.
id: REQ-license-license-keys-limit-override
type: req
---
The license key limit on the license server cannot be changed for an individual customer.

## Context

Hand-set exceptions had been forgotten and never reviewed.

## Source

> feat(license): overriding the license key limit (LIC-226)

Source: License server decision log - LIC-226
