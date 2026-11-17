---
title: Tag filter shortcut names in the web client are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refu…
status: active
semantic_text: Tag filter shortcut names in the web client are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
semantic_clauses:
  - Tag filter shortcut names in the web client are trimmed of leading and trailing whitespace before they are saved
  - a name that is empty after trimming is refused
logic_claims:
  - CLAIM-1A5A56A61FF4E7AE
  - CLAIM-70D5F8163A64221A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e6551d4b1d07f31a64036a251b3cb2fd58163fdfddda173b79cd434b5bf606c7
semantic_inventory:
  - claim_key: CLAIM-1A5A56A61FF4E7AE
    claim_text: Tag filter shortcut names in the web client are trimmed of leading and trailing whitespace before they are saved
    role: normative
    status: modeled
    span:
      start: 0
      end: 112
    subjects:
      - client.tag_filter_shortcuts
  - claim_key: CLAIM-70D5F8163A64221A
    claim_text: a name that is empty after trimming is refused
    role: descriptive
    status: modeled
    span:
      start: 114
      end: 160
    subjects:
      - client.tag_filter_shortcuts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Web client decision log (apps/papra-client): WCL-167'
  recorded_at: '2025-09-25T10:21:11.000Z'
tags:
  - bootstrap
  - knowledge-source:client-decisions
  - component:client
rationale: Pasted names carried trailing spaces and produced tag filter shortcuts that looked identical but were not.
id: REQ-client-tag-filter-shortcuts-names-trimmed
type: req
---
Tag filter shortcut names in the web client are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.

## Context

Pasted names carried trailing spaces and produced tag filter shortcuts that looked identical but were not.

## Source

> fix(client): trim tag filter shortcut names (WCL-167)

Source: Web client decision log (apps/papra-client) - WCL-167
