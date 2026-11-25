---
title: The partner portal uses a fixed development value outside production when PARTNER_PORTAL_JWT_SECRET is not set.
status: active
semantic_text: The partner portal uses a fixed development value outside production when PARTNER_PORTAL_JWT_SECRET is not set.
semantic_clauses:
  - The partner portal uses a fixed development value outside production when PARTNER_PORTAL_JWT_SECRET is not set
logic_claims:
  - CLAIM-BDADFFE2C8DD92D4
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a5da62f7368f997c24cbc793ef8a186e2423687f7309fd30f12bf51f09169175
semantic_inventory:
  - claim_key: CLAIM-BDADFFE2C8DD92D4
    claim_text: The partner portal uses a fixed development value outside production when PARTNER_PORTAL_JWT_SECRET is not set
    role: normative
    status: modeled
    span:
      start: 0
      end: 110
    subjects:
      - portal.partner_portal_jwt_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-253'
  recorded_at: '2025-05-07T14:38:28.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
id: REQ-portal-partner-portal-jwt-secret-development-default
type: req
---
The partner portal uses a fixed development value outside production when PARTNER_PORTAL_JWT_SECRET is not set.

## Context

Reason not stated.

## Source

> feat(portal): PARTNER_PORTAL_JWT_SECRET outside production (PRT-253)

Source: Partner portal decision log - PRT-253
