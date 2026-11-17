---
title: The linked organization limit in the desktop sync client cannot be changed for an individual device.
status: active
semantic_text: The linked organization limit in the desktop sync client cannot be changed for an individual device.
semantic_clauses:
  - The linked organization limit in the desktop sync client cannot be changed for an individual device
logic_claims:
  - CLAIM-3ACDB7F6FE86431A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f8d017a77f8cbae9cd14f62a84f83a62cbd74a204f2a7b6a1ea61b944b87a383
semantic_inventory:
  - claim_key: CLAIM-3ACDB7F6FE86431A
    claim_text: The linked organization limit in the desktop sync client cannot be changed for an individual device
    role: normative
    status: modeled
    span:
      start: 0
      end: 99
    subjects:
      - desktop.linked_organizations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Desktop sync client decision log: DSK-299'
  recorded_at: '2025-08-18T16:41:32.000Z'
tags:
  - bootstrap
  - knowledge-source:desktop-decisions
  - component:desktop
rationale: Support needed a way to help one customer without changing the limit for all.
id: REQ-desktop-linked-organizations-limit-override
type: req
---
The linked organization limit in the desktop sync client cannot be changed for an individual device.

## Context

Support needed a way to help one customer without changing the limit for all.

## Source

> feat(desktop): overriding the linked organization limit (DSK-299)

Source: Desktop sync client decision log - DSK-299
