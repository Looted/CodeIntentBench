---
title: A deleted sub-partner account in the partner portal can be restored for 30 days; after that it is removed for good.
status: active
semantic_text: A deleted sub-partner account in the partner portal can be restored for 30 days; after that it is removed for good.
semantic_clauses:
  - A deleted sub-partner account in the partner portal can be restored for 30 days
  - after that it is removed for good
logic_claims:
  - CLAIM-72A32520ED180FC1
  - CLAIM-7E91447BA9FA2D3B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 7044df1ea6328a702d669f15cee6e98a8ea3ddd210ca2394943151355904945b
semantic_inventory:
  - claim_key: CLAIM-72A32520ED180FC1
    claim_text: A deleted sub-partner account in the partner portal can be restored for 30 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 79
    subjects:
      - portal.sub_partner_accounts
  - claim_key: CLAIM-7E91447BA9FA2D3B
    claim_text: after that it is removed for good
    role: descriptive
    status: modeled
    span:
      start: 81
      end: 114
    subjects:
      - portal.sub_partner_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-322'
  recorded_at: '2025-03-22T17:32:44.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
rationale: Most deletions that were regretted were noticed within a week or two.
id: REQ-portal-sub-partner-accounts-deletion-grace
type: req
---
A deleted sub-partner account in the partner portal can be restored for 30 days; after that it is removed for good.

## Context

Most deletions that were regretted were noticed within a week or two.

## Source

> feat(portal): 30-day restore window for sub-partner accounts (PRT-322)

Source: Partner portal decision log - PRT-322
