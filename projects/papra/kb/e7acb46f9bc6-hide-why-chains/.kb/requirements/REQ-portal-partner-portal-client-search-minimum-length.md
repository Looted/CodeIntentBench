---
title: The partner portal client search runs only once the query has at least 1 character.
status: active
semantic_text: The partner portal client search runs only once the query has at least 1 character.
semantic_clauses:
  - The partner portal client search runs only once the query has at least 1 character
logic_claims:
  - CLAIM-AE60F36231ABD10F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: de74dfdb81b3bfddaffce3bdcd92b6de9ca17b658a9bdcc03734d2a6dab46315
semantic_inventory:
  - claim_key: CLAIM-AE60F36231ABD10F
    claim_text: The partner portal client search runs only once the query has at least 1 character
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 82
    subjects:
      - portal.partner_portal_client_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-173'
  recorded_at: '2025-03-21T10:06:37.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
rationale: One-letter queries matched nearly everything and were slow to render.
id: REQ-portal-partner-portal-client-search-minimum-length
type: req
---
The partner portal client search runs only once the query has at least 1 character.

## Context

One-letter queries matched nearly everything and were slow to render.

## Source

> feat(portal): minimum query length 1 (PRT-173)

Source: Partner portal decision log - PRT-173
