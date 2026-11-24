---
title: A deleted subscriber list on the status page can be restored for 90 days; after that it is removed for good.
status: active
semantic_text: A deleted subscriber list on the status page can be restored for 90 days; after that it is removed for good.
semantic_clauses:
  - A deleted subscriber list on the status page can be restored for 90 days
  - after that it is removed for good
logic_claims:
  - CLAIM-1683A147EEE2A984
  - CLAIM-7E91447BA9FA2D3B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 7aa47ec3b3acf3d8541cbe972a8a216eb515899121d9821cb474ae484e10d489
semantic_inventory:
  - claim_key: CLAIM-1683A147EEE2A984
    claim_text: A deleted subscriber list on the status page can be restored for 90 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 72
    subjects:
      - status.subscriber_lists
  - claim_key: CLAIM-7E91447BA9FA2D3B
    claim_text: after that it is removed for good
    role: descriptive
    status: modeled
    span:
      start: 74
      end: 107
    subjects:
      - status.subscriber_lists
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Status page runbook: STA-279'
  recorded_at: '2025-08-07T08:21:22.000Z'
tags:
  - bootstrap
  - knowledge-source:status-decisions
  - component:status
rationale: Most deletions that were regretted were noticed within a week or two.
id: REQ-status-subscriber-lists-deletion-grace
type: req
---
A deleted subscriber list on the status page can be restored for 90 days; after that it is removed for good.

## Context

Most deletions that were regretted were noticed within a week or two.

## Source

> feat(status): 90-day restore window for subscriber lists (STA-279)

Source: Status page runbook - STA-279
