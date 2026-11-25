---
title: At most 20 component groups can be added or removed in one request on the status page.
status: active
semantic_text: At most 20 component groups can be added or removed in one request on the status page.
semantic_clauses:
  - At most 20 component groups can be added or removed in one request on the status page
logic_claims:
  - CLAIM-D798231B1F3BFE4C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 419f2d6feab3dd4b1a9d79dcc6a49decd06964242bb6e3db61b6e38ec8473fe5
semantic_inventory:
  - claim_key: CLAIM-D798231B1F3BFE4C
    claim_text: At most 20 component groups can be added or removed in one request on the status page
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 85
    subjects:
      - status.component_groups
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Status page runbook: STA-176'
  recorded_at: '2026-02-17T16:01:05.000Z'
tags:
  - bootstrap
  - knowledge-source:status-decisions
  - component:status
id: REQ-status-component-groups-batch-size
type: req
---
At most 20 component groups can be added or removed in one request on the status page.

## Context

Reason not stated.

## Source

> feat(status): batch component groups, 20 per request (STA-176)

Source: Status page runbook - STA-176
