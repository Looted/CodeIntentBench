---
title: A repeated address in partner portal registration is reported as already registered.
status: active
semantic_text: A repeated address in partner portal registration is reported as already registered.
semantic_clauses:
  - A repeated address in partner portal registration is reported as already registered
logic_claims:
  - CLAIM-EBA9B58B9BD6558C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c4b2376f11b9fd01c689df19d544d63531462df07e01c3270efe04e13651d93a
semantic_inventory:
  - claim_key: CLAIM-EBA9B58B9BD6558C
    claim_text: A repeated address in partner portal registration is reported as already registered
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 83
    subjects:
      - portal.partner_registration
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-280'
  recorded_at: '2026-02-12T15:07:10.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
rationale: The form could be used to check whether an address was known.
id: REQ-portal-partner-registration-repeat-address
type: req
---
A repeated address in partner portal registration is reported as already registered.

## Context

The form could be used to check whether an address was known.

## Source

> feat(portal): repeated addresses in partner registration (PRT-280)

Source: Partner portal decision log - PRT-280
