---
title: The license server reads LICENSE_SIGNING_KEY from a file named by LICENSE_SIGNING_KEY_FILE when that variable is set.
status: active
semantic_text: The license server reads LICENSE_SIGNING_KEY from a file named by LICENSE_SIGNING_KEY_FILE when that variable is set.
semantic_clauses:
  - The license server reads LICENSE_SIGNING_KEY from a file named by LICENSE_SIGNING_KEY_FILE when that variable is set
logic_claims:
  - CLAIM-459AB5B249488A2F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 16a62a4d9e70c7be32bea7528eb0af3f90b59b0ce5aa7e6a8c8a103e3591690b
semantic_inventory:
  - claim_key: CLAIM-459AB5B249488A2F
    claim_text: The license server reads LICENSE_SIGNING_KEY from a file named by LICENSE_SIGNING_KEY_FILE when that variable is set
    role: normative
    status: modeled
    span:
      start: 0
      end: 116
    subjects:
      - license.license_signing_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'License server decision log: LIC-155'
  recorded_at: '2025-09-03T10:09:45.000Z'
tags:
  - bootstrap
  - knowledge-source:license-decisions
  - component:license
rationale: Container platforms mount secrets as files.
id: REQ-license-license-signing-key-source
type: req
---
The license server reads LICENSE_SIGNING_KEY from a file named by LICENSE_SIGNING_KEY_FILE when that variable is set.

## Context

Container platforms mount secrets as files.

## Source

> feat(license): where LICENSE_SIGNING_KEY is read from (LIC-155)

Source: License server decision log - LIC-155
