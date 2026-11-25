---
title: Creating an activation on the license server when the license key is at the limit is refused with an error that names the limit.
status: active
semantic_text: Creating an activation on the license server when the license key is at the limit is refused with an error that names the limit.
semantic_clauses:
  - Creating an activation on the license server when the license key is at the limit is refused with an error that names the limit
logic_claims:
  - CLAIM-95CE1E119673E6D7
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 564cbf43807bcf171cfc1d5f07aeb8ea9c3dd3c3db37073ded8995b967a10716
semantic_inventory:
  - claim_key: CLAIM-95CE1E119673E6D7
    claim_text: Creating an activation on the license server when the license key is at the limit is refused with an error that names the limit
    role: normative
    status: modeled
    span:
      start: 0
      end: 127
    subjects:
      - license.activations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'License server decision log: LIC-145'
  recorded_at: '2025-04-12T10:52:31.000Z'
tags:
  - bootstrap
  - knowledge-source:license-decisions
  - component:license
rationale: An error that did not say what the limit was produced a support ticket every time.
id: REQ-license-activations-at-the-limit
type: req
---
Creating an activation on the license server when the license key is at the limit is refused with an error that names the limit.

## Context

An error that did not say what the limit was produced a support ticket every time.

## Source

> feat(license): creating an activation at the limit (LIC-145)

Source: License server decision log - LIC-145
