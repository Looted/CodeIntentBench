---
title: The partner portal generates a random token signing secret at startup when PARTNER_PORTAL_JWT_SECRET is not set; it logs a warning that values signed before…
status: active
semantic_text: The partner portal generates a random token signing secret at startup when PARTNER_PORTAL_JWT_SECRET is not set; it logs a warning that values signed before a restart stop verifying.
semantic_clauses:
  - The partner portal generates a random token signing secret at startup when PARTNER_PORTAL_JWT_SECRET is not set
  - it logs a warning that values signed before a restart stop verifying
logic_claims:
  - CLAIM-784666B8AA8EC706
  - CLAIM-74CA22345F9A5AC3
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0ad332b52e707258180a8b0403ec0110153389d98c94d77f77c6499279d0e064
semantic_inventory:
  - claim_key: CLAIM-784666B8AA8EC706
    claim_text: The partner portal generates a random token signing secret at startup when PARTNER_PORTAL_JWT_SECRET is not set
    role: normative
    status: modeled
    span:
      start: 0
      end: 111
    subjects:
      - portal.partner_portal_jwt_secret
  - claim_key: CLAIM-74CA22345F9A5AC3
    claim_text: it logs a warning that values signed before a restart stop verifying
    role: normative
    status: modeled
    span:
      start: 113
      end: 181
    subjects:
      - portal.partner_portal_jwt_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-163'
  recorded_at: '2025-05-14T15:28:19.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
id: REQ-portal-partner-portal-jwt-secret-generated-when-missing
type: req
---
The partner portal generates a random token signing secret at startup when PARTNER_PORTAL_JWT_SECRET is not set; it logs a warning that values signed before a restart stop verifying.

## Context

Reason not stated.

## Source

> feat(portal): generate PARTNER_PORTAL_JWT_SECRET when unset (PRT-163)

Source: Partner portal decision log - PRT-163
