---
title: The desktop update server refuses the example value of UPDATE_SIGNING_KEY from its documentation, in every environment.
status: active
semantic_text: The desktop update server refuses the example value of UPDATE_SIGNING_KEY from its documentation, in every environment.
semantic_clauses:
  - The desktop update server refuses the example value of UPDATE_SIGNING_KEY from its documentation, in every environment
logic_claims:
  - CLAIM-6463EA7A78462178
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 258df6231e26e5ab01a95304d6c9717b142fb1dcb115d64707ff636c81956836
semantic_inventory:
  - claim_key: CLAIM-6463EA7A78462178
    claim_text: The desktop update server refuses the example value of UPDATE_SIGNING_KEY from its documentation, in every environment
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 118
    subjects:
      - desktop.update_signing_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Desktop sync client decision log: DSK-273'
  recorded_at: '2025-06-14T15:52:47.000Z'
tags:
  - bootstrap
  - knowledge-source:desktop-decisions
  - component:desktop
rationale: The example value was found in use on public deployments.
id: REQ-desktop-update-signing-key-example-value-refused
type: req
---
The desktop update server refuses the example value of UPDATE_SIGNING_KEY from its documentation, in every environment.

## Context

The example value was found in use on public deployments.

## Source

> feat(desktop): refuse the documented example UPDATE_SIGNING_KEY (DSK-273)

Source: Desktop sync client decision log - DSK-273
