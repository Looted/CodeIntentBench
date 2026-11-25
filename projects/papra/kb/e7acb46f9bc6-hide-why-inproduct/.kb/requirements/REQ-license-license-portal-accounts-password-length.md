---
title: Passwords of license portal accounts are at least 16 characters long; there is no rule about character classes.
status: active
semantic_text: Passwords of license portal accounts are at least 16 characters long; there is no rule about character classes.
semantic_clauses:
  - Passwords of license portal accounts are at least 16 characters long
  - there is no rule about character classes
logic_claims:
  - CLAIM-7FDA4F08A1043537
  - CLAIM-3BB7AA89852B2146
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 9ff404d51a11c11de8f8b0ab68b3c51bd27f150099f1d7b2efd6d310be568d4c
semantic_inventory:
  - claim_key: CLAIM-7FDA4F08A1043537
    claim_text: Passwords of license portal accounts are at least 16 characters long
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 68
    subjects:
      - license.license_portal_accounts
  - claim_key: CLAIM-3BB7AA89852B2146
    claim_text: there is no rule about character classes
    role: descriptive
    status: modeled
    span:
      start: 70
      end: 110
    subjects:
      - license.license_portal_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'License server decision log: LIC-196'
  recorded_at: '2026-09-16T13:23:41.000Z'
tags:
  - bootstrap
  - knowledge-source:license-decisions
  - component:license
id: REQ-license-license-portal-accounts-password-length
type: req
---
Passwords of license portal accounts are at least 16 characters long; there is no rule about character classes.

## Context

Reason not stated.

## Source

> feat(license): password minimum length 16 (LIC-196)

Source: License server decision log - LIC-196
