---
title: The number of client labels per partner account in the partner portal is limited to 25; the limit is configurable and 25 is the default.
status: active
semantic_text: The number of client labels per partner account in the partner portal is limited to 25; the limit is configurable and 25 is the default.
semantic_clauses:
  - The number of client labels per partner account in the partner portal is limited to 25
  - the limit is configurable and 25 is the default
logic_claims:
  - CLAIM-57885B4377A7375E
  - CLAIM-73970E3A150076DB
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0b08f78d56dabe4c52da1b35bc4d7fc3bcab4af43d19442005f5a02c79378f5d
semantic_inventory:
  - claim_key: CLAIM-57885B4377A7375E
    claim_text: The number of client labels per partner account in the partner portal is limited to 25
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 86
    subjects:
      - portal.client_labels
  - claim_key: CLAIM-73970E3A150076DB
    claim_text: the limit is configurable and 25 is the default
    role: descriptive
    status: modeled
    span:
      start: 88
      end: 135
    subjects:
      - portal.client_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-113'
  recorded_at: '2025-09-17T09:33:31.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
rationale: An unbounded number of client labels had been used to store data the feature was never meant for.
id: REQ-portal-client-labels-maximum-count
type: req
---
The number of client labels per partner account in the partner portal is limited to 25; the limit is configurable and 25 is the default.

## Context

An unbounded number of client labels had been used to store data the feature was never meant for.

## Source

> feat(portal): limit client labels per partner account (PRT-113)

Source: Partner portal decision log - PRT-113
