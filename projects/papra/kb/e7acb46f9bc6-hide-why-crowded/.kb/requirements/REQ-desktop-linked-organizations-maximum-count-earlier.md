---
title: A device can own at most 3 linked organizations in the desktop sync client.
status: closed
semantic_text: A device can own at most 3 linked organizations in the desktop sync client.
semantic_clauses:
  - A device can own at most 3 linked organizations in the desktop sync client
logic_claims:
  - CLAIM-0A5CABDCE0BF2B0F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3c15521090a563fcb94ca60c61ee736a28b7f9176a4ad47146b40869a22b5988
semantic_inventory:
  - claim_key: CLAIM-0A5CABDCE0BF2B0F
    claim_text: A device can own at most 3 linked organizations in the desktop sync client
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 74
    subjects:
      - desktop.linked_organizations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Desktop sync client decision log: DSK-220'
  recorded_at: '2025-06-14T08:27:05.000Z'
tags:
  - bootstrap
  - knowledge-source:desktop-decisions
  - component:desktop
id: REQ-desktop-linked-organizations-maximum-count-earlier
type: req
---
A device can own at most 3 linked organizations in the desktop sync client.

## Context

Reason not stated.

## Source

> feat(desktop): limit linked organizations per device (DSK-220)

Source: Desktop sync client decision log - DSK-220
