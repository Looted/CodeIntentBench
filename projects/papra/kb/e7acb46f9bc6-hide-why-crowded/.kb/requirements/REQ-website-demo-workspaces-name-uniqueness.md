---
title: Demo workspace names on the marketing website are unique per visitor, regardless of letter case.
status: active
semantic_text: Demo workspace names on the marketing website are unique per visitor, regardless of letter case.
semantic_clauses:
  - Demo workspace names on the marketing website are unique per visitor, regardless of letter case
logic_claims:
  - CLAIM-104C23D301C081E9
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c77dcf5c7ff6381efc87fb01c1e046a3ddd33b1a1e674108f185035f773b7f09
semantic_inventory:
  - claim_key: CLAIM-104C23D301C081E9
    claim_text: Demo workspace names on the marketing website are unique per visitor, regardless of letter case
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 95
    subjects:
      - website.demo_workspaces
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-426'
  recorded_at: '2026-03-26T11:57:35.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
rationale: Two demo workspaces with the same name could not be told apart in the switcher.
id: REQ-website-demo-workspaces-name-uniqueness
type: req
---
Demo workspace names on the marketing website are unique per visitor, regardless of letter case.

## Context

Two demo workspaces with the same name could not be told apart in the switcher.

## Source

> feat(website): demo workspace name uniqueness (WEB-426)

Source: Marketing website decision log (apps/website) - WEB-426
