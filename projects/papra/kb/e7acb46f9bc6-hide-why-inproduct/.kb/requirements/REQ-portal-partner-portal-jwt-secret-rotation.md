---
title: PARTNER_PORTAL_JWT_SECRET is rotated every 180 days; the previous value stays valid for 24 hours after a rotation.
status: active
semantic_text: PARTNER_PORTAL_JWT_SECRET is rotated every 180 days; the previous value stays valid for 24 hours after a rotation.
semantic_clauses:
  - PARTNER_PORTAL_JWT_SECRET is rotated every 180 days
  - the previous value stays valid for 24 hours after a rotation
logic_claims:
  - CLAIM-1427E3ADDD5BF3ED
  - CLAIM-A45280A30BC5D577
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 028a1ad3f5484603956ddc0dbfa6ebce84052499a761db7118aab1742ff12a2b
semantic_inventory:
  - claim_key: CLAIM-1427E3ADDD5BF3ED
    claim_text: PARTNER_PORTAL_JWT_SECRET is rotated every 180 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 51
    subjects:
      - portal.partner_portal_jwt_secret
  - claim_key: CLAIM-A45280A30BC5D577
    claim_text: the previous value stays valid for 24 hours after a rotation
    role: descriptive
    status: modeled
    span:
      start: 53
      end: 113
    subjects:
      - portal.partner_portal_jwt_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-174'
  recorded_at: '2026-04-18T08:09:23.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
id: REQ-portal-partner-portal-jwt-secret-rotation
type: req
---
PARTNER_PORTAL_JWT_SECRET is rotated every 180 days; the previous value stays valid for 24 hours after a rotation.

## Context

Reason not stated.

## Source

> chore(portal): rotate PARTNER_PORTAL_JWT_SECRET every 180 days (PRT-174)

Source: Partner portal decision log - PRT-174
