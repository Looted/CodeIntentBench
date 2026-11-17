---
title: Sessions of template author accounts last at most 7 days; they end after 30 minutes without activity.
status: active
semantic_text: Sessions of template author accounts last at most 7 days; they end after 30 minutes without activity.
semantic_clauses:
  - Sessions of template author accounts last at most 7 days
  - they end after 30 minutes without activity
logic_claims:
  - CLAIM-63454F75B6FE621F
  - CLAIM-3547C110EC2A0F3A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 893cd4eff2c2353d4459dc72a6407072a4f6b641826d1f3318babe28a708f7ac
semantic_inventory:
  - claim_key: CLAIM-63454F75B6FE621F
    claim_text: Sessions of template author accounts last at most 7 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 56
    subjects:
      - marketplace.template_author_accounts
  - claim_key: CLAIM-3547C110EC2A0F3A
    claim_text: they end after 30 minutes without activity
    role: descriptive
    status: modeled
    span:
      start: 58
      end: 100
    subjects:
      - marketplace.template_author_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Template marketplace decision log: MKT-275'
  recorded_at: '2026-07-26T17:59:52.000Z'
tags:
  - bootstrap
  - knowledge-source:marketplace-decisions
  - component:marketplace
id: REQ-marketplace-template-author-accounts-session-lifetime
type: req
---
Sessions of template author accounts last at most 7 days; they end after 30 minutes without activity.

## Context

Reason not stated.

## Source

> feat(marketplace): session lifetime (MKT-275)

Source: Template marketplace decision log - MKT-275
