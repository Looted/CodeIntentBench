---
title: LICENSE_SIGNING_KEY is rotated every 30 days; the previous value stays valid for 1 hours after a rotation.
status: active
semantic_text: LICENSE_SIGNING_KEY is rotated every 30 days; the previous value stays valid for 1 hours after a rotation.
semantic_clauses:
  - LICENSE_SIGNING_KEY is rotated every 30 days
  - the previous value stays valid for 1 hours after a rotation
logic_claims:
  - CLAIM-D09D8F0DA1882CCF
  - CLAIM-BD83FC4FB2DF2432
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: cbf294cc7b4c01815eed9baa4d5e063d6760cfa91db9f5b02f30a3c7385230dc
semantic_inventory:
  - claim_key: CLAIM-D09D8F0DA1882CCF
    claim_text: LICENSE_SIGNING_KEY is rotated every 30 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 44
    subjects:
      - license.license_signing_key
  - claim_key: CLAIM-BD83FC4FB2DF2432
    claim_text: the previous value stays valid for 1 hours after a rotation
    role: descriptive
    status: modeled
    span:
      start: 46
      end: 105
    subjects:
      - license.license_signing_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'License server decision log: LIC-154'
  recorded_at: '2025-04-18T12:10:48.000Z'
tags:
  - bootstrap
  - knowledge-source:license-decisions
  - component:license
rationale: Without an overlap, a rotation of the license signing key broke requests already on their way.
id: REQ-license-license-signing-key-rotation
type: req
---
LICENSE_SIGNING_KEY is rotated every 30 days; the previous value stays valid for 1 hours after a rotation.

## Context

Without an overlap, a rotation of the license signing key broke requests already on their way.

## Source

> chore(license): rotate LICENSE_SIGNING_KEY every 30 days (LIC-154)

Source: License server decision log - LIC-154
