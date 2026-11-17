---
title: The partner portal reads PARTNER_PORTAL_JWT_SECRET from the environment only, never from a configuration file.
status: active
semantic_text: The partner portal reads PARTNER_PORTAL_JWT_SECRET from the environment only, never from a configuration file.
semantic_clauses:
  - The partner portal reads PARTNER_PORTAL_JWT_SECRET from the environment only, never from a configuration file
logic_claims:
  - CLAIM-76AA8C754997E720
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c8822b466c6d86f43e24606de586c7652374c90f7b01fde23e7f689cf2c28d5c
semantic_inventory:
  - claim_key: CLAIM-76AA8C754997E720
    claim_text: The partner portal reads PARTNER_PORTAL_JWT_SECRET from the environment only, never from a configuration file
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 109
    subjects:
      - portal.partner_portal_jwt_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-248'
  recorded_at: '2026-03-24T15:13:49.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
rationale: Container platforms mount secrets as files.
id: REQ-portal-partner-portal-jwt-secret-source
type: req
---
The partner portal reads PARTNER_PORTAL_JWT_SECRET from the environment only, never from a configuration file.

## Context

Container platforms mount secrets as files.

## Source

> feat(portal): where PARTNER_PORTAL_JWT_SECRET is read from (PRT-248)

Source: Partner portal decision log - PRT-248
