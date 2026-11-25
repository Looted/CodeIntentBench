---
title: A device can own at most 100 linked organizations in the desktop sync client; the limit is the same for everyone.
status: active
semantic_text: A device can own at most 100 linked organizations in the desktop sync client; the limit is the same for everyone.
semantic_clauses:
  - A device can own at most 100 linked organizations in the desktop sync client
  - the limit is the same for everyone
logic_claims:
  - CLAIM-E82A866F7D055881
  - CLAIM-950BC8C0A4D47D22
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 61e52a8ed21c8c484b6a5221a23b1014120e20158e44a957757747958ca0e6fa
semantic_inventory:
  - claim_key: CLAIM-E82A866F7D055881
    claim_text: A device can own at most 100 linked organizations in the desktop sync client
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 76
    subjects:
      - desktop.linked_organizations
  - claim_key: CLAIM-950BC8C0A4D47D22
    claim_text: the limit is the same for everyone
    role: descriptive
    status: modeled
    span:
      start: 78
      end: 112
    subjects:
      - desktop.linked_organizations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Desktop sync client decision log: DSK-290'
  recorded_at: '2025-06-16T10:34:29.000Z'
tags:
  - bootstrap
  - knowledge-source:desktop-decisions
  - component:desktop
id: REQ-desktop-linked-organizations-maximum-count
type: req
---
A device can own at most 100 linked organizations in the desktop sync client; the limit is the same for everyone.

## Context

Reason not stated.

## Why this changed

Reason not stated. DSK-290 replaces the value recorded in DSK-220 without saying why it changed.

## Source

> feat(desktop): limit linked organizations per device (DSK-290)

Source: Desktop sync client decision log - DSK-290
