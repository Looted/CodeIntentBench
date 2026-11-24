---
title: Tag colour presets in the web client are unique per organization regardless of letter case; a duplicate is reported as tag-colour-preset-already-exists.
status: active
semantic_text: Tag colour presets in the web client are unique per organization regardless of letter case; a duplicate is reported as tag-colour-preset-already-exists.
semantic_clauses:
  - Tag colour presets in the web client are unique per organization regardless of letter case
  - a duplicate is reported as tag-colour-preset-already-exists
logic_claims:
  - CLAIM-F9205FE65B2687F8
  - CLAIM-CB1261F8B726ECDF
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b15f144a6440543f1daf5b0041d9c1c7f72c5e34d0877ff800ea11e65d1ed7d9
semantic_inventory:
  - claim_key: CLAIM-F9205FE65B2687F8
    claim_text: Tag colour presets in the web client are unique per organization regardless of letter case
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 90
    subjects:
      - client.tag_colour_presets
  - claim_key: CLAIM-CB1261F8B726ECDF
    claim_text: a duplicate is reported as tag-colour-preset-already-exists
    role: descriptive
    status: modeled
    span:
      start: 92
      end: 151
    subjects:
      - client.tag_colour_presets
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Web client decision log (apps/papra-client): WCL-139'
  recorded_at: '2025-11-21T12:41:58.000Z'
tags:
  - bootstrap
  - knowledge-source:client-decisions
  - component:client
id: REQ-client-tag-colour-presets-unique-ignoring-case
type: req
---
Tag colour presets in the web client are unique per organization regardless of letter case; a duplicate is reported as tag-colour-preset-already-exists.

## Context

Reason not stated.

## Source

> feat(client): case-insensitive unique tag colour preset names (WCL-139)

Source: Web client decision log (apps/papra-client) - WCL-139
