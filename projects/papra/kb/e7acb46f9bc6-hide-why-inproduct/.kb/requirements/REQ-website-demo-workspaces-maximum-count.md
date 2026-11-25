---
title: The number of demo workspaces per visitor on the marketing website is limited to 2; the limit is the same for everyone.
status: active
semantic_text: The number of demo workspaces per visitor on the marketing website is limited to 2; the limit is the same for everyone.
semantic_clauses:
  - The number of demo workspaces per visitor on the marketing website is limited to 2
  - the limit is the same for everyone
logic_claims:
  - CLAIM-653E7AA28A2B262B
  - CLAIM-950BC8C0A4D47D22
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8877b99a3a660efc13014754e14b71550659ca0b9fc9733fe40247642aceb764
semantic_inventory:
  - claim_key: CLAIM-653E7AA28A2B262B
    claim_text: The number of demo workspaces per visitor on the marketing website is limited to 2
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 82
    subjects:
      - website.demo_workspaces
  - claim_key: CLAIM-950BC8C0A4D47D22
    claim_text: the limit is the same for everyone
    role: descriptive
    status: modeled
    span:
      start: 84
      end: 118
    subjects:
      - website.demo_workspaces
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-301'
  recorded_at: '2026-02-07T16:35:50.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
id: REQ-website-demo-workspaces-maximum-count
type: req
---
The number of demo workspaces per visitor on the marketing website is limited to 2; the limit is the same for everyone.

## Context

Reason not stated.

## Source

> feat(website): limit demo workspaces per visitor (WEB-301)

Source: Marketing website decision log (apps/website) - WEB-301
