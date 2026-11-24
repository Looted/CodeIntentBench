---
title: Staff can raise or lower the support contact limit for an individual organization in the support portal.
status: active
semantic_text: Staff can raise or lower the support contact limit for an individual organization in the support portal.
semantic_clauses:
  - Staff can raise or lower the support contact limit for an individual organization in the support portal
logic_claims:
  - CLAIM-B23C8508A16A5C1F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 9dcdc822bd5581caa76ac44de7a29e44a9fc9c6d7ca7ef9f4310b45505974679
semantic_inventory:
  - claim_key: CLAIM-B23C8508A16A5C1F
    claim_text: Staff can raise or lower the support contact limit for an individual organization in the support portal
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 103
    subjects:
      - support.support_contacts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-296'
  recorded_at: '2026-06-10T16:00:23.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
rationale: Hand-set exceptions had been forgotten and never reviewed.
id: REQ-support-support-contacts-limit-override
type: req
---
Staff can raise or lower the support contact limit for an individual organization in the support portal.

## Context

Hand-set exceptions had been forgotten and never reviewed.

## Source

> feat(support): overriding the support contact limit (SUP-296)

Source: Support portal decision log - SUP-296
