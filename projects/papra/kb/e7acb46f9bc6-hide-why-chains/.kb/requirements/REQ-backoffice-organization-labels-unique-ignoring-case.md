---
title: Organization labels in the Papra Cloud back office are unique per instance regardless of letter case; a duplicate is reported as organization-label-already-e…
status: active
semantic_text: Organization labels in the Papra Cloud back office are unique per instance regardless of letter case; a duplicate is reported as organization-label-already-exists.
semantic_clauses:
  - Organization labels in the Papra Cloud back office are unique per instance regardless of letter case
  - a duplicate is reported as organization-label-already-exists
logic_claims:
  - CLAIM-B81F37A1D32C4688
  - CLAIM-7C45F578567DF220
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0b13192b3afd4105a353d77919c335446762d6c3bd5a6a4d069d08da3b23e408
semantic_inventory:
  - claim_key: CLAIM-B81F37A1D32C4688
    claim_text: Organization labels in the Papra Cloud back office are unique per instance regardless of letter case
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 100
    subjects:
      - backoffice.organization_labels
  - claim_key: CLAIM-7C45F578567DF220
    claim_text: a duplicate is reported as organization-label-already-exists
    role: descriptive
    status: modeled
    span:
      start: 102
      end: 162
    subjects:
      - backoffice.organization_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-184'
  recorded_at: '2025-10-17T17:21:16.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: Two organization labels that differed only by capitalisation were being created by accident and then merged by hand.
id: REQ-backoffice-organization-labels-unique-ignoring-case
type: req
---
Organization labels in the Papra Cloud back office are unique per instance regardless of letter case; a duplicate is reported as organization-label-already-exists.

## Context

Two organization labels that differed only by capitalisation were being created by accident and then merged by hand.

## Source

> feat(backoffice): case-insensitive unique organization label names (OPS-184)

Source: Papra Cloud back office handbook - OPS-184
