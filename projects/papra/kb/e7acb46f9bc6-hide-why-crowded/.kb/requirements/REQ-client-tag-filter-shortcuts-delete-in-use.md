---
title: Deleting a tag filter shortcut in the web client removes it from everything that uses it, without confirmation for each use.
status: active
semantic_text: Deleting a tag filter shortcut in the web client removes it from everything that uses it, without confirmation for each use.
semantic_clauses:
  - Deleting a tag filter shortcut in the web client removes it from everything that uses it, without confirmation for each use
logic_claims:
  - CLAIM-BFEE0F0CC7F1F622
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2e2d6bc7e403b6afd46d6f1ff584a6e2b23c763e34f7d4725b9de5f14b74c325
semantic_inventory:
  - claim_key: CLAIM-BFEE0F0CC7F1F622
    claim_text: Deleting a tag filter shortcut in the web client removes it from everything that uses it, without confirmation for each use
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 123
    subjects:
      - client.tag_filter_shortcuts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Web client decision log (apps/papra-client): WCL-174'
  recorded_at: '2025-06-05T11:24:12.000Z'
tags:
  - bootstrap
  - knowledge-source:client-decisions
  - component:client
rationale: Asking for confirmation once per use made cleaning up tag filter shortcuts impractical.
id: REQ-client-tag-filter-shortcuts-delete-in-use
type: req
---
Deleting a tag filter shortcut in the web client removes it from everything that uses it, without confirmation for each use.

## Context

Asking for confirmation once per use made cleaning up tag filter shortcuts impractical.

## Source

> feat(client): deleting a tag filter shortcut detaches it (WCL-174)

Source: Web client decision log (apps/papra-client) - WCL-174
