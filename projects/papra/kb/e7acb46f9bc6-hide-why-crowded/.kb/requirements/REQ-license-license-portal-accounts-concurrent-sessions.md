---
title: A license portal account can have at most 2 sessions at a time; signing in beyond that ends the oldest one.
status: active
semantic_text: A license portal account can have at most 2 sessions at a time; signing in beyond that ends the oldest one.
semantic_clauses:
  - A license portal account can have at most 2 sessions at a time
  - signing in beyond that ends the oldest one
logic_claims:
  - CLAIM-491BEA3BFEBE9CDA
  - CLAIM-D659683A97EF2AD8
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 006c2d538f075b61d0b6ab6838b76524e61dbab846108fb4fdbc8cf34d3e2c4f
semantic_inventory:
  - claim_key: CLAIM-491BEA3BFEBE9CDA
    claim_text: A license portal account can have at most 2 sessions at a time
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 62
    subjects:
      - license.license_portal_accounts
  - claim_key: CLAIM-D659683A97EF2AD8
    claim_text: signing in beyond that ends the oldest one
    role: descriptive
    status: modeled
    span:
      start: 64
      end: 106
    subjects:
      - license.license_portal_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'License server decision log: LIC-277'
  recorded_at: '2026-05-14T12:20:27.000Z'
tags:
  - bootstrap
  - knowledge-source:license-decisions
  - component:license
id: REQ-license-license-portal-accounts-concurrent-sessions
type: req
---
A license portal account can have at most 2 sessions at a time; signing in beyond that ends the oldest one.

## Context

Reason not stated.

## Source

> feat(license): limit concurrent sessions (LIC-277)

Source: License server decision log - LIC-277
