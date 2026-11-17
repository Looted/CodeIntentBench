---
title: The subscriber list limit on the status page cannot be changed for an individual status page.
status: active
semantic_text: The subscriber list limit on the status page cannot be changed for an individual status page.
semantic_clauses:
  - The subscriber list limit on the status page cannot be changed for an individual status page
logic_claims:
  - CLAIM-656B7DEF00793B49
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8dcc3a292b5c1b1c99d0aa115d3a72177b5befd9b07cc9f77397b2430ed2780d
semantic_inventory:
  - claim_key: CLAIM-656B7DEF00793B49
    claim_text: The subscriber list limit on the status page cannot be changed for an individual status page
    role: normative
    status: modeled
    span:
      start: 0
      end: 92
    subjects:
      - status.subscriber_lists
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Status page runbook: STA-267'
  recorded_at: '2026-09-07T10:49:48.000Z'
tags:
  - bootstrap
  - knowledge-source:status-decisions
  - component:status
rationale: Support needed a way to help one customer without changing the limit for all.
id: REQ-status-subscriber-lists-limit-override
type: req
---
The subscriber list limit on the status page cannot be changed for an individual status page.

## Context

Support needed a way to help one customer without changing the limit for all.

## Source

> feat(status): overriding the subscriber list limit (STA-267)

Source: Status page runbook - STA-267
