---
title: The partner portal payout search returns at most 200 results per page.
status: active
semantic_text: The partner portal payout search returns at most 200 results per page.
semantic_clauses:
  - The partner portal payout search returns at most 200 results per page
logic_claims:
  - CLAIM-B23A8A2C6E008AA5
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 38afbaf6f482577db14ff9976ff8080182eadb2c546766b83ac484b3db2dda16
semantic_inventory:
  - claim_key: CLAIM-B23A8A2C6E008AA5
    claim_text: The partner portal payout search returns at most 200 results per page
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 69
    subjects:
      - portal.partner_portal_payout_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-209'
  recorded_at: '2025-02-03T08:19:47.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
rationale: Larger pages were slow on the devices most people use.
id: REQ-portal-partner-portal-payout-search-page-size
type: req
---
The partner portal payout search returns at most 200 results per page.

## Context

Larger pages were slow on the devices most people use.

## Source

> feat(portal): 200 results per page (PRT-209)

Source: Partner portal decision log - PRT-209
