---
title: The desktop update server reads UPDATE_SIGNING_KEY from a file named by UPDATE_SIGNING_KEY_FILE when that variable is set.
status: active
semantic_text: The desktop update server reads UPDATE_SIGNING_KEY from a file named by UPDATE_SIGNING_KEY_FILE when that variable is set.
semantic_clauses:
  - The desktop update server reads UPDATE_SIGNING_KEY from a file named by UPDATE_SIGNING_KEY_FILE when that variable is set
logic_claims:
  - CLAIM-D30C1C60AE8743BA
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 92c3064ef25b03f99a841129752238129cba5a191d591095deabe2422cc0be98
semantic_inventory:
  - claim_key: CLAIM-D30C1C60AE8743BA
    claim_text: The desktop update server reads UPDATE_SIGNING_KEY from a file named by UPDATE_SIGNING_KEY_FILE when that variable is set
    role: normative
    status: modeled
    span:
      start: 0
      end: 121
    subjects:
      - desktop.update_signing_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Desktop sync client decision log: DSK-284'
  recorded_at: '2025-05-13T09:14:03.000Z'
tags:
  - bootstrap
  - knowledge-source:desktop-decisions
  - component:desktop
id: REQ-desktop-update-signing-key-source
type: req
---
The desktop update server reads UPDATE_SIGNING_KEY from a file named by UPDATE_SIGNING_KEY_FILE when that variable is set.

## Context

Reason not stated.

## Source

> feat(desktop): where UPDATE_SIGNING_KEY is read from (DSK-284)

Source: Desktop sync client decision log - DSK-284
