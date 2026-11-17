---
title: Saved view names in the web client are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
status: active
semantic_text: Saved view names in the web client are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
semantic_clauses:
  - Saved view names in the web client are trimmed of leading and trailing whitespace before they are saved
  - a name that is empty after trimming is refused
logic_claims:
  - CLAIM-DA52047DED71882C
  - CLAIM-70D5F8163A64221A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 6ea6f63d35a35864be06c2f0290516cb1648230826b38769a94c17c81e7e38f5
semantic_inventory:
  - claim_key: CLAIM-DA52047DED71882C
    claim_text: Saved view names in the web client are trimmed of leading and trailing whitespace before they are saved
    role: normative
    status: modeled
    span:
      start: 0
      end: 103
    subjects:
      - client.saved_views
  - claim_key: CLAIM-70D5F8163A64221A
    claim_text: a name that is empty after trimming is refused
    role: descriptive
    status: modeled
    span:
      start: 105
      end: 151
    subjects:
      - client.saved_views
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Web client decision log (apps/papra-client): WCL-126'
  recorded_at: '2026-02-02T10:53:06.000Z'
tags:
  - bootstrap
  - knowledge-source:client-decisions
  - component:client
id: REQ-client-saved-views-names-trimmed
type: req
---
Saved view names in the web client are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.

## Context

Reason not stated.

## Source

> fix(client): trim saved view names (WCL-126)

Source: Web client decision log (apps/papra-client) - WCL-126
