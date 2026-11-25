---
title: A partner portal account can have at most 5 sessions at a time; signing in beyond that ends the oldest one.
status: active
semantic_text: A partner portal account can have at most 5 sessions at a time; signing in beyond that ends the oldest one.
semantic_clauses:
  - A partner portal account can have at most 5 sessions at a time
  - signing in beyond that ends the oldest one
logic_claims:
  - CLAIM-6C2EF5CA63BADC0B
  - CLAIM-D659683A97EF2AD8
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: de28d8445defb6127ed83d916ccc82cc6d5091bb14295c705724a4b09a2c0971
semantic_inventory:
  - claim_key: CLAIM-6C2EF5CA63BADC0B
    claim_text: A partner portal account can have at most 5 sessions at a time
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 62
    subjects:
      - portal.partner_portal_accounts
  - claim_key: CLAIM-D659683A97EF2AD8
    claim_text: signing in beyond that ends the oldest one
    role: descriptive
    status: modeled
    span:
      start: 64
      end: 106
    subjects:
      - portal.partner_portal_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-371'
  recorded_at: '2026-05-01T08:29:16.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
id: REQ-portal-partner-portal-accounts-concurrent-sessions
type: req
---
A partner portal account can have at most 5 sessions at a time; signing in beyond that ends the oldest one.

## Context

Reason not stated.

## Source

> feat(portal): limit concurrent sessions (PRT-371)

Source: Partner portal decision log - PRT-371
