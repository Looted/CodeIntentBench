---
title: A partner can have at most 5 referral links in the partner portal; the limit is configured per deployment and 5 is the default.
status: active
semantic_text: A partner can have at most 5 referral links in the partner portal; the limit is configured per deployment and 5 is the default.
semantic_clauses:
  - A partner can have at most 5 referral links in the partner portal
  - the limit is configured per deployment and 5 is the default
logic_claims:
  - CLAIM-75826B7E5B30D919
  - CLAIM-EE3A84A4255D9DE5
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1e3ab9e19f083abf1f39a72947d94e7fb2b6ec7b1ad60fa5f7c1a60320def700
semantic_inventory:
  - claim_key: CLAIM-75826B7E5B30D919
    claim_text: A partner can have at most 5 referral links in the partner portal
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 65
    subjects:
      - portal.referral_links
  - claim_key: CLAIM-EE3A84A4255D9DE5
    claim_text: the limit is configured per deployment and 5 is the default
    role: descriptive
    status: modeled
    span:
      start: 67
      end: 126
    subjects:
      - portal.referral_links
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-327'
  recorded_at: '2025-05-22T12:40:40.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
id: REQ-portal-referral-links-maximum-count
type: req
---
A partner can have at most 5 referral links in the partner portal; the limit is configured per deployment and 5 is the default.

## Context

Reason not stated.

## Source

> feat(portal): limit referral links per partner (PRT-327)

Source: Partner portal decision log - PRT-327
