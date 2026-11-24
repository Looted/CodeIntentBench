---
title: Sessions of partner portal accounts last at most 7 days; they end after 30 minutes without activity.
status: active
semantic_text: Sessions of partner portal accounts last at most 7 days; they end after 30 minutes without activity.
semantic_clauses:
  - Sessions of partner portal accounts last at most 7 days
  - they end after 30 minutes without activity
logic_claims:
  - CLAIM-AB76EBC668632301
  - CLAIM-3547C110EC2A0F3A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 9e7c3de376f87e2698f04dd2b760643ae450554e6c319d0883018d823d05dd2c
semantic_inventory:
  - claim_key: CLAIM-AB76EBC668632301
    claim_text: Sessions of partner portal accounts last at most 7 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 55
    subjects:
      - portal.partner_portal_accounts
  - claim_key: CLAIM-3547C110EC2A0F3A
    claim_text: they end after 30 minutes without activity
    role: descriptive
    status: modeled
    span:
      start: 57
      end: 99
    subjects:
      - portal.partner_portal_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-369'
  recorded_at: '2025-11-14T08:32:18.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
id: REQ-portal-partner-portal-accounts-session-lifetime
type: req
---
Sessions of partner portal accounts last at most 7 days; they end after 30 minutes without activity.

## Context

Reason not stated.

## Source

> feat(portal): session lifetime (PRT-369)

Source: Partner portal decision log - PRT-369
