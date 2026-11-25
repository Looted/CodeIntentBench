---
title: Archived linked organizations do not count toward the limit in the desktop sync client; restoring one is refused while the device is at the limit.
status: active
semantic_text: Archived linked organizations do not count toward the limit in the desktop sync client; restoring one is refused while the device is at the limit.
semantic_clauses:
  - Archived linked organizations do not count toward the limit in the desktop sync client
  - restoring one is refused while the device is at the limit
logic_claims:
  - CLAIM-135EE588311F5FEE
  - CLAIM-6434432EC0A878AA
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: fb9d265fedfc4e7e071dd69f38b643ffc31f0070a98736885445c84ccb0f78a0
semantic_inventory:
  - claim_key: CLAIM-135EE588311F5FEE
    claim_text: Archived linked organizations do not count toward the limit in the desktop sync client
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 86
    subjects:
      - desktop.linked_organizations
  - claim_key: CLAIM-6434432EC0A878AA
    claim_text: restoring one is refused while the device is at the limit
    role: descriptive
    status: modeled
    span:
      start: 88
      end: 145
    subjects:
      - desktop.linked_organizations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Desktop sync client decision log: DSK-291'
  recorded_at: '2025-03-25T10:02:17.000Z'
tags:
  - bootstrap
  - knowledge-source:desktop-decisions
  - component:desktop
id: REQ-desktop-linked-organizations-what-counts
type: req
---
Archived linked organizations do not count toward the limit in the desktop sync client; restoring one is refused while the device is at the limit.

## Context

Reason not stated.

## Source

> feat(desktop): which linked organizations count toward the limit (DSK-291)

Source: Desktop sync client decision log - DSK-291
