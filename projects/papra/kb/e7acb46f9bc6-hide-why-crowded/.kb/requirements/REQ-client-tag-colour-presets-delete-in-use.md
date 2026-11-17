---
title: Deleting a tag colour preset in the web client removes it from everything that uses it, without confirmation for each use.
status: active
semantic_text: Deleting a tag colour preset in the web client removes it from everything that uses it, without confirmation for each use.
semantic_clauses:
  - Deleting a tag colour preset in the web client removes it from everything that uses it, without confirmation for each use
logic_claims:
  - CLAIM-6BCF60092D507FEA
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 86085840bb0bc34e6fe1853a457459188a8ee1adb777aa9026158c96b64c8a15
semantic_inventory:
  - claim_key: CLAIM-6BCF60092D507FEA
    claim_text: Deleting a tag colour preset in the web client removes it from everything that uses it, without confirmation for each use
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 121
    subjects:
      - client.tag_colour_presets
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Web client decision log (apps/papra-client): WCL-155'
  recorded_at: '2026-05-13T11:08:44.000Z'
tags:
  - bootstrap
  - knowledge-source:client-decisions
  - component:client
rationale: Asking for confirmation once per use made cleaning up tag colour presets impractical.
id: REQ-client-tag-colour-presets-delete-in-use
type: req
---
Deleting a tag colour preset in the web client removes it from everything that uses it, without confirmation for each use.

## Context

Asking for confirmation once per use made cleaning up tag colour presets impractical.

## Source

> feat(client): deleting a tag colour preset detaches it (WCL-155)

Source: Web client decision log (apps/papra-client) - WCL-155
