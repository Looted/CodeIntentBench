---
title: SUPPORT_SSO_SECRET must be at least 16 characters long.
status: closed
semantic_text: SUPPORT_SSO_SECRET must be at least 16 characters long.
semantic_clauses:
  - SUPPORT_SSO_SECRET must be at least 16 characters long
logic_claims:
  - CLAIM-BD640325B8A30104
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 5fe3221d3d1a0c53a36c3755d654eba06dd0c782f90d60c049d44c4764722c71
semantic_inventory:
  - claim_key: CLAIM-BD640325B8A30104
    claim_text: SUPPORT_SSO_SECRET must be at least 16 characters long
    role: normative
    status: modeled
    span:
      start: 0
      end: 54
    subjects:
      - support.support_sso_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-159'
  recorded_at: '2025-09-09T17:42:02.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
id: REQ-support-support-sso-secret-minimum-length-earlier
type: req
---
SUPPORT_SSO_SECRET must be at least 16 characters long.

## Context

Reason not stated.

## Source

> feat(support): SUPPORT_SSO_SECRET minimum length 40 (SUP-159)

Source: Support portal decision log - SUP-159
