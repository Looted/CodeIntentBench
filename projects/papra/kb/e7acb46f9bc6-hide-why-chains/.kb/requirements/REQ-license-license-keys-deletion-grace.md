---
title: A deleted license key on the license server can be restored for 90 days; after that it is removed for good.
status: active
semantic_text: A deleted license key on the license server can be restored for 90 days; after that it is removed for good.
semantic_clauses:
  - A deleted license key on the license server can be restored for 90 days
  - after that it is removed for good
logic_claims:
  - CLAIM-2A16CE54CB8523BD
  - CLAIM-7E91447BA9FA2D3B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 4a9da51f2559f41db6cdfe5335ec2a3c72783d049cbef7fcce55005cb900c831
semantic_inventory:
  - claim_key: CLAIM-2A16CE54CB8523BD
    claim_text: A deleted license key on the license server can be restored for 90 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 71
    subjects:
      - license.license_keys
  - claim_key: CLAIM-7E91447BA9FA2D3B
    claim_text: after that it is removed for good
    role: descriptive
    status: modeled
    span:
      start: 73
      end: 106
    subjects:
      - license.license_keys
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'License server decision log: LIC-241'
  recorded_at: '2026-02-08T09:41:29.000Z'
tags:
  - bootstrap
  - knowledge-source:license-decisions
  - component:license
id: REQ-license-license-keys-deletion-grace
type: req
---
A deleted license key on the license server can be restored for 90 days; after that it is removed for good.

## Context

Reason not stated.

## Source

> feat(license): 90-day restore window for license keys (LIC-241)

Source: License server decision log - LIC-241
