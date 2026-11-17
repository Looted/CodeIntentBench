---
title: The desktop update server never writes UPDATE_SIGNING_KEY or a value derived from it to its logs; startup logs show only whether it is set.
status: active
semantic_text: The desktop update server never writes UPDATE_SIGNING_KEY or a value derived from it to its logs; startup logs show only whether it is set.
semantic_clauses:
  - The desktop update server never writes UPDATE_SIGNING_KEY or a value derived from it to its logs
  - startup logs show only whether it is set
logic_claims:
  - CLAIM-5C609FE639442328
  - CLAIM-2AB50BBAACA14801
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 23ac25b4a695a4387e55b506b39cecad157d2024228c551b37d30ce20fdd9c6f
semantic_inventory:
  - claim_key: CLAIM-5C609FE639442328
    claim_text: The desktop update server never writes UPDATE_SIGNING_KEY or a value derived from it to its logs
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 96
    subjects:
      - desktop.update_signing_key
  - claim_key: CLAIM-2AB50BBAACA14801
    claim_text: startup logs show only whether it is set
    role: descriptive
    status: modeled
    span:
      start: 98
      end: 138
    subjects:
      - desktop.update_signing_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Desktop sync client decision log: DSK-285'
  recorded_at: '2025-10-12T13:24:44.000Z'
tags:
  - bootstrap
  - knowledge-source:desktop-decisions
  - component:desktop
rationale: A debug log line had printed the configuration, the secret included.
id: REQ-desktop-update-signing-key-never-logged
type: req
---
The desktop update server never writes UPDATE_SIGNING_KEY or a value derived from it to its logs; startup logs show only whether it is set.

## Context

A debug log line had printed the configuration, the secret included.

## Source

> fix(desktop): keep UPDATE_SIGNING_KEY out of logs (DSK-285)

Source: Desktop sync client decision log - DSK-285
