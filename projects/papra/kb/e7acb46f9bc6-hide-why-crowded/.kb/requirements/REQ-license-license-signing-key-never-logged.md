---
title: The license server never writes LICENSE_SIGNING_KEY or a value derived from it to its logs; startup logs show only whether it is set.
status: active
semantic_text: The license server never writes LICENSE_SIGNING_KEY or a value derived from it to its logs; startup logs show only whether it is set.
semantic_clauses:
  - The license server never writes LICENSE_SIGNING_KEY or a value derived from it to its logs
  - startup logs show only whether it is set
logic_claims:
  - CLAIM-05B1680C478392BA
  - CLAIM-2AB50BBAACA14801
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 4196114a866c98fd39dc517d5247dfc7757a18abe909cf846d416d47d608f35d
semantic_inventory:
  - claim_key: CLAIM-05B1680C478392BA
    claim_text: The license server never writes LICENSE_SIGNING_KEY or a value derived from it to its logs
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 90
    subjects:
      - license.license_signing_key
  - claim_key: CLAIM-2AB50BBAACA14801
    claim_text: startup logs show only whether it is set
    role: descriptive
    status: modeled
    span:
      start: 92
      end: 132
    subjects:
      - license.license_signing_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'License server decision log: LIC-156'
  recorded_at: '2026-02-03T14:05:04.000Z'
tags:
  - bootstrap
  - knowledge-source:license-decisions
  - component:license
rationale: A debug log line had printed the configuration, the secret included.
id: REQ-license-license-signing-key-never-logged
type: req
---
The license server never writes LICENSE_SIGNING_KEY or a value derived from it to its logs; startup logs show only whether it is set.

## Context

A debug log line had printed the configuration, the secret included.

## Source

> fix(license): keep LICENSE_SIGNING_KEY out of logs (LIC-156)

Source: License server decision log - LIC-156
