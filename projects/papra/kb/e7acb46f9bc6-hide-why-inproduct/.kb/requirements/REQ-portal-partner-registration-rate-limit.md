---
title: At most 3 requests per IP address per hour are accepted in partner portal registration.
status: active
semantic_text: At most 3 requests per IP address per hour are accepted in partner portal registration.
semantic_clauses:
  - At most 3 requests per IP address per hour are accepted in partner portal registration
logic_claims:
  - CLAIM-3FF2B3632BAA33FA
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3e4a5fcb4ef625e68c0bfad3b06c6bbeaaa0fefd9667ba5bc5dd1234fecf0526
semantic_inventory:
  - claim_key: CLAIM-3FF2B3632BAA33FA
    claim_text: At most 3 requests per IP address per hour are accepted in partner portal registration
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 86
    subjects:
      - portal.partner_registration
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-201'
  recorded_at: '2025-09-06T10:12:10.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
rationale: A script had submitted the form several thousand times in a night.
id: REQ-portal-partner-registration-rate-limit
type: req
---
At most 3 requests per IP address per hour are accepted in partner portal registration.

## Context

A script had submitted the form several thousand times in a night.

## Source

> feat(portal): rate limit partner registration (PRT-201)

Source: Partner portal decision log - PRT-201
