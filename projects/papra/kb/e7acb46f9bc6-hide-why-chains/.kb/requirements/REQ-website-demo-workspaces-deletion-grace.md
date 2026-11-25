---
title: A deleted demo workspace on the marketing website can be restored for 30 days; after that it is removed for good.
status: active
semantic_text: A deleted demo workspace on the marketing website can be restored for 30 days; after that it is removed for good.
semantic_clauses:
  - A deleted demo workspace on the marketing website can be restored for 30 days
  - after that it is removed for good
logic_claims:
  - CLAIM-9A9D5D4F8207D01E
  - CLAIM-7E91447BA9FA2D3B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 5693d88e27698aeefe692a0fc29f7c8066d7390cc91ac0959ba1bbc843819776
semantic_inventory:
  - claim_key: CLAIM-9A9D5D4F8207D01E
    claim_text: A deleted demo workspace on the marketing website can be restored for 30 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 77
    subjects:
      - website.demo_workspaces
  - claim_key: CLAIM-7E91447BA9FA2D3B
    claim_text: after that it is removed for good
    role: descriptive
    status: modeled
    span:
      start: 79
      end: 112
    subjects:
      - website.demo_workspaces
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-437'
  recorded_at: '2025-04-22T11:28:46.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
rationale: Most deletions that were regretted were noticed within a week or two.
id: REQ-website-demo-workspaces-deletion-grace
type: req
---
A deleted demo workspace on the marketing website can be restored for 30 days; after that it is removed for good.

## Context

Most deletions that were regretted were noticed within a week or two.

## Source

> feat(website): 30-day restore window for demo workspaces (WEB-437)

Source: Marketing website decision log (apps/website) - WEB-437
