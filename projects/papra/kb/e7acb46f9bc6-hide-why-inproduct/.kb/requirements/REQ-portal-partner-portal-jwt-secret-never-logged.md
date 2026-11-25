---
title: The partner portal never writes PARTNER_PORTAL_JWT_SECRET or a value derived from it to its logs; startup logs show only whether it is set.
status: active
semantic_text: The partner portal never writes PARTNER_PORTAL_JWT_SECRET or a value derived from it to its logs; startup logs show only whether it is set.
semantic_clauses:
  - The partner portal never writes PARTNER_PORTAL_JWT_SECRET or a value derived from it to its logs
  - startup logs show only whether it is set
logic_claims:
  - CLAIM-C1A4B102737336E4
  - CLAIM-2AB50BBAACA14801
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d17b508cd4e561beec5bdc02220746e5a6070e4413ae63ce021b614523c99dbb
semantic_inventory:
  - claim_key: CLAIM-C1A4B102737336E4
    claim_text: The partner portal never writes PARTNER_PORTAL_JWT_SECRET or a value derived from it to its logs
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 96
    subjects:
      - portal.partner_portal_jwt_secret
  - claim_key: CLAIM-2AB50BBAACA14801
    claim_text: startup logs show only whether it is set
    role: descriptive
    status: modeled
    span:
      start: 98
      end: 138
    subjects:
      - portal.partner_portal_jwt_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-180'
  recorded_at: '2026-07-23T15:02:30.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
rationale: A debug log line had printed the configuration, the secret included.
id: REQ-portal-partner-portal-jwt-secret-never-logged
type: req
---
The partner portal never writes PARTNER_PORTAL_JWT_SECRET or a value derived from it to its logs; startup logs show only whether it is set.

## Context

A debug log line had printed the configuration, the secret included.

## Source

> fix(portal): keep PARTNER_PORTAL_JWT_SECRET out of logs (PRT-180)

Source: Partner portal decision log - PRT-180
