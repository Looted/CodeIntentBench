---
title: Sessions of newsletter preference accounts last at most 14 days; they end after 60 minutes without activity.
status: active
semantic_text: Sessions of newsletter preference accounts last at most 14 days; they end after 60 minutes without activity.
semantic_clauses:
  - Sessions of newsletter preference accounts last at most 14 days
  - they end after 60 minutes without activity
logic_claims:
  - CLAIM-DB9780F9FA8F18C9
  - CLAIM-F3D76F855733BF57
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8528527bc1d85041244d0b898b5ee69e936f525a96e9f65ce68699d353b429ca
semantic_inventory:
  - claim_key: CLAIM-DB9780F9FA8F18C9
    claim_text: Sessions of newsletter preference accounts last at most 14 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 63
    subjects:
      - website.newsletter_preference_accounts
  - claim_key: CLAIM-F3D76F855733BF57
    claim_text: they end after 60 minutes without activity
    role: descriptive
    status: modeled
    span:
      start: 65
      end: 107
    subjects:
      - website.newsletter_preference_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-486'
  recorded_at: '2025-12-19T13:10:45.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
rationale: Shared computers were left signed in.
id: REQ-website-newsletter-preference-accounts-session-lifetime
type: req
---
Sessions of newsletter preference accounts last at most 14 days; they end after 60 minutes without activity.

## Context

Shared computers were left signed in.

## Source

> feat(website): session lifetime (WEB-486)

Source: Marketing website decision log (apps/website) - WEB-486
