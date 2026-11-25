---
title: PARTNER_PORTAL_JWT_SECRET must be at least 40 characters long.
status: active
semantic_text: PARTNER_PORTAL_JWT_SECRET must be at least 40 characters long.
semantic_clauses:
  - PARTNER_PORTAL_JWT_SECRET must be at least 40 characters long
logic_claims:
  - CLAIM-380CA65F63D5FA3C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 29dbc7bf75b6e87068fd52bc181d16329507ff6b001d2144fe555f244077edf1
semantic_inventory:
  - claim_key: CLAIM-380CA65F63D5FA3C
    claim_text: PARTNER_PORTAL_JWT_SECRET must be at least 40 characters long
    role: normative
    status: modeled
    span:
      start: 0
      end: 61
    subjects:
      - portal.partner_portal_jwt_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-165'
  recorded_at: '2026-01-09T17:23:31.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
rationale: Short values of the token signing secret can be guessed offline from one signed value.
id: REQ-portal-partner-portal-jwt-secret-minimum-length
type: req
---
PARTNER_PORTAL_JWT_SECRET must be at least 40 characters long.

## Context

Short values of the token signing secret can be guessed offline from one signed value.

## Source

> feat(portal): PARTNER_PORTAL_JWT_SECRET minimum length 40 (PRT-165)

Source: Partner portal decision log - PRT-165
