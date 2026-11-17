---
title: A filter name that the partner portal payout search does not know is rejected with a list of the known filters.
status: active
semantic_text: A filter name that the partner portal payout search does not know is rejected with a list of the known filters.
semantic_clauses:
  - A filter name that the partner portal payout search does not know is rejected with a list of the known filters
logic_claims:
  - CLAIM-1E8034B0B1CB3FD1
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1760b4466a21fb1961b4f658525145dcc5827de19fa904c62dcbc03431e2c4b3
semantic_inventory:
  - claim_key: CLAIM-1E8034B0B1CB3FD1
    claim_text: A filter name that the partner portal payout search does not know is rejected with a list of the known filters
    role: normative
    status: modeled
    span:
      start: 0
      end: 110
    subjects:
      - portal.partner_portal_payout_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-228'
  recorded_at: '2025-11-05T08:49:35.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
rationale: A mistyped filter name silently widened the search.
id: REQ-portal-partner-portal-payout-search-unknown-filter
type: req
---
A filter name that the partner portal payout search does not know is rejected with a list of the known filters.

## Context

A mistyped filter name silently widened the search.

## Source

> feat(portal): unknown search filters (PRT-228)

Source: Partner portal decision log - PRT-228
