---
title: UPDATE_SIGNING_KEY is rotated every 90 days; the previous value stays valid for 48 hours after a rotation.
status: active
semantic_text: UPDATE_SIGNING_KEY is rotated every 90 days; the previous value stays valid for 48 hours after a rotation.
semantic_clauses:
  - UPDATE_SIGNING_KEY is rotated every 90 days
  - the previous value stays valid for 48 hours after a rotation
logic_claims:
  - CLAIM-896AE610E374161B
  - CLAIM-40B0302E57698F6D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 13243491a058472ab7baab97a2b5dc4c3e0305cdb1433d6c3bfe015f0e1fa60d
semantic_inventory:
  - claim_key: CLAIM-896AE610E374161B
    claim_text: UPDATE_SIGNING_KEY is rotated every 90 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 43
    subjects:
      - desktop.update_signing_key
  - claim_key: CLAIM-40B0302E57698F6D
    claim_text: the previous value stays valid for 48 hours after a rotation
    role: descriptive
    status: modeled
    span:
      start: 45
      end: 105
    subjects:
      - desktop.update_signing_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Desktop sync client decision log: DSK-276'
  recorded_at: '2026-04-10T12:39:46.000Z'
tags:
  - bootstrap
  - knowledge-source:desktop-decisions
  - component:desktop
rationale: Without an overlap, a rotation of the update signing key broke requests already on their way.
id: REQ-desktop-update-signing-key-rotation
type: req
---
UPDATE_SIGNING_KEY is rotated every 90 days; the previous value stays valid for 48 hours after a rotation.

## Context

Without an overlap, a rotation of the update signing key broke requests already on their way.

## Source

> chore(desktop): rotate UPDATE_SIGNING_KEY every 90 days (DSK-276)

Source: Desktop sync client decision log - DSK-276
