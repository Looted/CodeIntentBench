---
title: UPDATE_SIGNING_KEY must be at least 32 characters long.
status: active
semantic_text: UPDATE_SIGNING_KEY must be at least 32 characters long.
semantic_clauses:
  - UPDATE_SIGNING_KEY must be at least 32 characters long
logic_claims:
  - CLAIM-90C6F1E6E1170B33
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 660c2d02f19fdda8d96a32566f5cce2ade444004dcfa14b28b995f9596ecc240
semantic_inventory:
  - claim_key: CLAIM-90C6F1E6E1170B33
    claim_text: UPDATE_SIGNING_KEY must be at least 32 characters long
    role: normative
    status: modeled
    span:
      start: 0
      end: 54
    subjects:
      - desktop.update_signing_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Desktop sync client decision log: DSK-270'
  recorded_at: '2025-09-25T14:21:35.000Z'
tags:
  - bootstrap
  - knowledge-source:desktop-decisions
  - component:desktop
rationale: Short values of the update signing key can be guessed offline from one signed value.
id: REQ-desktop-update-signing-key-minimum-length
type: req
---
UPDATE_SIGNING_KEY must be at least 32 characters long.

## Context

Short values of the update signing key can be guessed offline from one signed value.

## Source

> feat(desktop): UPDATE_SIGNING_KEY minimum length 32 (DSK-270)

Source: Desktop sync client decision log - DSK-270
