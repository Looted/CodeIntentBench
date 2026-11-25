---
title: The demo workspace limit on the marketing website cannot be changed for an individual visitor.
status: active
semantic_text: The demo workspace limit on the marketing website cannot be changed for an individual visitor.
semantic_clauses:
  - The demo workspace limit on the marketing website cannot be changed for an individual visitor
logic_claims:
  - CLAIM-9F07ACA95E2BD092
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1cf2b71fc701435897153d7e9c7132fcfab16e1a308794327d3767620c52dd8f
semantic_inventory:
  - claim_key: CLAIM-9F07ACA95E2BD092
    claim_text: The demo workspace limit on the marketing website cannot be changed for an individual visitor
    role: normative
    status: modeled
    span:
      start: 0
      end: 93
    subjects:
      - website.demo_workspaces
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-413'
  recorded_at: '2026-02-04T08:14:08.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
rationale: Hand-set exceptions had been forgotten and never reviewed.
id: REQ-website-demo-workspaces-limit-override
type: req
---
The demo workspace limit on the marketing website cannot be changed for an individual visitor.

## Context

Hand-set exceptions had been forgotten and never reviewed.

## Source

> feat(website): overriding the demo workspace limit (WEB-413)

Source: Marketing website decision log (apps/website) - WEB-413
