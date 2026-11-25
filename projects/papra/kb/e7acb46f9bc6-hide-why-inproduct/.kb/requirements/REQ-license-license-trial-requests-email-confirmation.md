---
title: Addresses given in license trial requests need no confirmation.
status: active
semantic_text: Addresses given in license trial requests need no confirmation.
semantic_clauses:
  - Addresses given in license trial requests need no confirmation
logic_claims:
  - CLAIM-C36E02C015321926
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 578703076a95b567253d126bfc3dd80883f743ff2a8aaeea740cbf38a53f6c86
semantic_inventory:
  - claim_key: CLAIM-C36E02C015321926
    claim_text: Addresses given in license trial requests need no confirmation
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 62
    subjects:
      - license.license_trial_requests
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'License server decision log: LIC-120'
  recorded_at: '2025-10-04T17:11:46.000Z'
tags:
  - bootstrap
  - knowledge-source:license-decisions
  - component:license
rationale: Mistyped addresses were receiving mail meant for someone else.
id: REQ-license-license-trial-requests-email-confirmation
type: req
---
Addresses given in license trial requests need no confirmation.

## Context

Mistyped addresses were receiving mail meant for someone else.

## Source

> feat(license): email confirmation for license trial requests (LIC-120)

Source: License server decision log - LIC-120
