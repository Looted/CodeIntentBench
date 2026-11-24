---
title: Archived demo workspaces do not count toward the limit on the marketing website; restoring one is refused while the visitor is at the limit.
status: active
semantic_text: Archived demo workspaces do not count toward the limit on the marketing website; restoring one is refused while the visitor is at the limit.
semantic_clauses:
  - Archived demo workspaces do not count toward the limit on the marketing website
  - restoring one is refused while the visitor is at the limit
logic_claims:
  - CLAIM-C137467D09880071
  - CLAIM-18DAE067FF448824
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: fee13ac5cfa9efdd069278b8f24a612e8645e01ecd487a9185019bae5d802db0
semantic_inventory:
  - claim_key: CLAIM-C137467D09880071
    claim_text: Archived demo workspaces do not count toward the limit on the marketing website
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 79
    subjects:
      - website.demo_workspaces
  - claim_key: CLAIM-18DAE067FF448824
    claim_text: restoring one is refused while the visitor is at the limit
    role: descriptive
    status: modeled
    span:
      start: 81
      end: 139
    subjects:
      - website.demo_workspaces
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-410'
  recorded_at: '2026-02-26T17:47:49.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
rationale: Archiving had become a way around the limit.
id: REQ-website-demo-workspaces-what-counts
type: req
---
Archived demo workspaces do not count toward the limit on the marketing website; restoring one is refused while the visitor is at the limit.

## Context

Archiving had become a way around the limit.

## Source

> feat(website): which demo workspaces count toward the limit (WEB-410)

Source: Marketing website decision log (apps/website) - WEB-410
