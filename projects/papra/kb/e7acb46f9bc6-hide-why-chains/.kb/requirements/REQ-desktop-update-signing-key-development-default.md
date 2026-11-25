---
title: The desktop update server requires UPDATE_SIGNING_KEY in every environment, development included.
status: active
semantic_text: The desktop update server requires UPDATE_SIGNING_KEY in every environment, development included.
semantic_clauses:
  - The desktop update server requires UPDATE_SIGNING_KEY in every environment, development included
logic_claims:
  - CLAIM-A9A4B81CE9C3769E
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 9f53685687c7861cf0e26f04a9010f5fedac14aabb09f0714e7a20752ec30541
semantic_inventory:
  - claim_key: CLAIM-A9A4B81CE9C3769E
    claim_text: The desktop update server requires UPDATE_SIGNING_KEY in every environment, development included
    role: normative
    status: modeled
    span:
      start: 0
      end: 96
    subjects:
      - desktop.update_signing_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Desktop sync client decision log: DSK-288'
  recorded_at: '2025-07-04T13:02:20.000Z'
tags:
  - bootstrap
  - knowledge-source:desktop-decisions
  - component:desktop
id: REQ-desktop-update-signing-key-development-default
type: req
---
The desktop update server requires UPDATE_SIGNING_KEY in every environment, development included.

## Context

Reason not stated.

## Source

> feat(desktop): UPDATE_SIGNING_KEY outside production (DSK-288)

Source: Desktop sync client decision log - DSK-288
