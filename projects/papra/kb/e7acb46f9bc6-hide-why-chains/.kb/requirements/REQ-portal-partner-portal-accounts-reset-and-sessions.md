---
title: Resetting the password of a partner portal account keeps the session that performed the reset and ends all others.
status: active
semantic_text: Resetting the password of a partner portal account keeps the session that performed the reset and ends all others.
semantic_clauses:
  - Resetting the password of a partner portal account keeps the session that performed the reset and ends all others
logic_claims:
  - CLAIM-19F59B3FAF8B5343
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d55efbf47004f377e6eae30bbf805b75f8ed420c1b595051c5e572275f986d90
semantic_inventory:
  - claim_key: CLAIM-19F59B3FAF8B5343
    claim_text: Resetting the password of a partner portal account keeps the session that performed the reset and ends all others
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 113
    subjects:
      - portal.partner_portal_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-351'
  recorded_at: '2025-02-04T11:11:36.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
rationale: Being signed out of the device they had just used to reset confused people.
id: REQ-portal-partner-portal-accounts-reset-and-sessions
type: req
---
Resetting the password of a partner portal account keeps the session that performed the reset and ends all others.

## Context

Being signed out of the device they had just used to reset confused people.

## Source

> feat(portal): sessions after a password reset (PRT-351)

Source: Partner portal decision log - PRT-351
