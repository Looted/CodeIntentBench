---
title: An email address can own at most 2 trial organizations in the Papra Cloud back office; the limit is configured per deployment and 2 is the default.
status: active
semantic_text: An email address can own at most 2 trial organizations in the Papra Cloud back office; the limit is configured per deployment and 2 is the default.
semantic_clauses:
  - An email address can own at most 2 trial organizations in the Papra Cloud back office
  - the limit is configured per deployment and 2 is the default
logic_claims:
  - CLAIM-1CA18B14C1871837
  - CLAIM-646750DD567C0C73
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2d1b2ee86fa9b27d3aaa03567c144e3f8f3a493045ce96ff5550cdd5319f8941
semantic_inventory:
  - claim_key: CLAIM-1CA18B14C1871837
    claim_text: An email address can own at most 2 trial organizations in the Papra Cloud back office
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 85
    subjects:
      - backoffice.trial_organizations
  - claim_key: CLAIM-646750DD567C0C73
    claim_text: the limit is configured per deployment and 2 is the default
    role: descriptive
    status: modeled
    span:
      start: 87
      end: 146
    subjects:
      - backoffice.trial_organizations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-491'
  recorded_at: '2026-09-08T10:27:29.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: Each trial organization reserves resources whether or not it is used.
id: REQ-backoffice-trial-organizations-maximum-count
type: req
---
An email address can own at most 2 trial organizations in the Papra Cloud back office; the limit is configured per deployment and 2 is the default.

## Context

Each trial organization reserves resources whether or not it is used.

## Why this changed

OPS-491 replaced the value recorded in OPS-421 and gives this reason for the change: Larger customers reached 1 trial organizations in their first month.

## Source

> feat(backoffice): limit trial organizations per email address (OPS-491)

Source: Papra Cloud back office handbook - OPS-491
