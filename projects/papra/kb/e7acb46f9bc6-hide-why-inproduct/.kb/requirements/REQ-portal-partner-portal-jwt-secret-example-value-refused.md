---
title: The partner portal refuses the example value of PARTNER_PORTAL_JWT_SECRET from its documentation, in every environment.
status: active
semantic_text: The partner portal refuses the example value of PARTNER_PORTAL_JWT_SECRET from its documentation, in every environment.
semantic_clauses:
  - The partner portal refuses the example value of PARTNER_PORTAL_JWT_SECRET from its documentation, in every environment
logic_claims:
  - CLAIM-356CF153C47550CE
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2f3369160b0e94c090771567b418f92b1833606cdcfc4249a75b3ac3611d974e
semantic_inventory:
  - claim_key: CLAIM-356CF153C47550CE
    claim_text: The partner portal refuses the example value of PARTNER_PORTAL_JWT_SECRET from its documentation, in every environment
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 118
    subjects:
      - portal.partner_portal_jwt_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-166'
  recorded_at: '2025-03-21T11:32:37.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
rationale: The example value was found in use on public deployments.
id: REQ-portal-partner-portal-jwt-secret-example-value-refused
type: req
---
The partner portal refuses the example value of PARTNER_PORTAL_JWT_SECRET from its documentation, in every environment.

## Context

The example value was found in use on public deployments.

## Source

> feat(portal): refuse the documented example PARTNER_PORTAL_JWT_SECRET (PRT-166)

Source: Partner portal decision log - PRT-166
