---
title: A partner can have at most 100 sub-partner accounts in the partner portal; the limit is the same for everyone.
status: active
semantic_text: A partner can have at most 100 sub-partner accounts in the partner portal; the limit is the same for everyone.
semantic_clauses:
  - A partner can have at most 100 sub-partner accounts in the partner portal
  - the limit is the same for everyone
logic_claims:
  - CLAIM-D568A3AA6F72AECA
  - CLAIM-950BC8C0A4D47D22
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 770ec56774a6ae63b247f771c44a02ba047f34b7e54bad233d408e865d038a55
semantic_inventory:
  - claim_key: CLAIM-D568A3AA6F72AECA
    claim_text: A partner can have at most 100 sub-partner accounts in the partner portal
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 73
    subjects:
      - portal.sub_partner_accounts
  - claim_key: CLAIM-950BC8C0A4D47D22
    claim_text: the limit is the same for everyone
    role: descriptive
    status: modeled
    span:
      start: 75
      end: 109
    subjects:
      - portal.sub_partner_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-240'
  recorded_at: '2026-09-17T13:31:33.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
id: REQ-portal-sub-partner-accounts-maximum-count
type: req
---
A partner can have at most 100 sub-partner accounts in the partner portal; the limit is the same for everyone.

## Context

Reason not stated.

## Why this changed

Reason not stated. PRT-240 replaces the value recorded in PRT-200 without saying why it changed.

## Source

> feat(portal): limit sub-partner accounts per partner (PRT-240)

Source: Partner portal decision log - PRT-240
