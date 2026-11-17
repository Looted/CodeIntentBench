---
title: Activation names on the license server are between 3 and 50 characters long.
status: active
semantic_text: Activation names on the license server are between 3 and 50 characters long.
semantic_clauses:
  - Activation names on the license server are between 3 and 50 characters long
logic_claims:
  - CLAIM-2356CC936A68AC4D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 61ac73cbb34c8880fb0e345b94a9ef6fb0d6d335749e3bb2122fd469ac5343f4
semantic_inventory:
  - claim_key: CLAIM-2356CC936A68AC4D
    claim_text: Activation names on the license server are between 3 and 50 characters long
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 75
    subjects:
      - license.activations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'License server decision log: LIC-212'
  recorded_at: '2026-04-02T09:34:11.000Z'
tags:
  - bootstrap
  - knowledge-source:license-decisions
  - component:license
rationale: One-letter names were used for throwaway tests and never cleaned up.
id: REQ-license-activations-name-length
type: req
---
Activation names on the license server are between 3 and 50 characters long.

## Context

One-letter names were used for throwaway tests and never cleaned up.

## Source

> feat(license): activation name length (LIC-212)

Source: License server decision log - LIC-212
