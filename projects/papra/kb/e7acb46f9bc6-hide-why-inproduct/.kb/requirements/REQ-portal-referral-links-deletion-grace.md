---
title: A deleted referral link in the partner portal can be restored for 60 days; after that it is removed for good.
status: active
semantic_text: A deleted referral link in the partner portal can be restored for 60 days; after that it is removed for good.
semantic_clauses:
  - A deleted referral link in the partner portal can be restored for 60 days
  - after that it is removed for good
logic_claims:
  - CLAIM-FE4C9853B57F9D3A
  - CLAIM-7E91447BA9FA2D3B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 7e85af9bb15a6e4f2ed57082a62f99de116560e8aef613675d7408bb6e337221
semantic_inventory:
  - claim_key: CLAIM-FE4C9853B57F9D3A
    claim_text: A deleted referral link in the partner portal can be restored for 60 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 73
    subjects:
      - portal.referral_links
  - claim_key: CLAIM-7E91447BA9FA2D3B
    claim_text: after that it is removed for good
    role: descriptive
    status: modeled
    span:
      start: 75
      end: 108
    subjects:
      - portal.referral_links
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-272'
  recorded_at: '2026-08-22T17:47:05.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
rationale: Most deletions that were regretted were noticed within a week or two.
id: REQ-portal-referral-links-deletion-grace
type: req
---
A deleted referral link in the partner portal can be restored for 60 days; after that it is removed for good.

## Context

Most deletions that were regretted were noticed within a week or two.

## Source

> feat(portal): 60-day restore window for referral links (PRT-272)

Source: Partner portal decision log - PRT-272
