---
title: A license key can have at most 3 activations on the license server; the limit is configured per deployment and 3 is the default.
status: active
semantic_text: A license key can have at most 3 activations on the license server; the limit is configured per deployment and 3 is the default.
semantic_clauses:
  - A license key can have at most 3 activations on the license server
  - the limit is configured per deployment and 3 is the default
logic_claims:
  - CLAIM-742D2868A54B50AB
  - CLAIM-AF6717F4E0A15E09
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 67454a13062a0dd626ff65c5149863d3c4dfd25b92276c4ee9cf1d1a5695a6ae
semantic_inventory:
  - claim_key: CLAIM-742D2868A54B50AB
    claim_text: A license key can have at most 3 activations on the license server
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 66
    subjects:
      - license.activations
  - claim_key: CLAIM-AF6717F4E0A15E09
    claim_text: the limit is configured per deployment and 3 is the default
    role: descriptive
    status: modeled
    span:
      start: 68
      end: 127
    subjects:
      - license.activations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'License server decision log: LIC-130'
  recorded_at: '2026-05-24T12:37:33.000Z'
tags:
  - bootstrap
  - knowledge-source:license-decisions
  - component:license
id: REQ-license-activations-maximum-count
type: req
---
A license key can have at most 3 activations on the license server; the limit is configured per deployment and 3 is the default.

## Context

Reason not stated.

## Source

> feat(license): limit activations per license key (LIC-130)

Source: License server decision log - LIC-130
