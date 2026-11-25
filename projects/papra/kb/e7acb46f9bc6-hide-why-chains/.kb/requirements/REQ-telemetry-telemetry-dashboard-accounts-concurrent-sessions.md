---
title: A telemetry dashboard account can have at most 2 sessions at a time; signing in beyond that ends the oldest one.
status: active
semantic_text: A telemetry dashboard account can have at most 2 sessions at a time; signing in beyond that ends the oldest one.
semantic_clauses:
  - A telemetry dashboard account can have at most 2 sessions at a time
  - signing in beyond that ends the oldest one
logic_claims:
  - CLAIM-A72ED85DB6DC2DBC
  - CLAIM-D659683A97EF2AD8
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e905e1634d304b9054b0da06feddb6a764d5dafe971dbb1a8a397ddce41cf189
semantic_inventory:
  - claim_key: CLAIM-A72ED85DB6DC2DBC
    claim_text: A telemetry dashboard account can have at most 2 sessions at a time
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 67
    subjects:
      - telemetry.telemetry_dashboard_accounts
  - claim_key: CLAIM-D659683A97EF2AD8
    claim_text: signing in beyond that ends the oldest one
    role: descriptive
    status: modeled
    span:
      start: 69
      end: 111
    subjects:
      - telemetry.telemetry_dashboard_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-341'
  recorded_at: '2025-11-18T10:06:35.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
id: REQ-telemetry-telemetry-dashboard-accounts-concurrent-sessions
type: req
---
A telemetry dashboard account can have at most 2 sessions at a time; signing in beyond that ends the oldest one.

## Context

Reason not stated.

## Source

> feat(telemetry): limit concurrent sessions (TEL-341)

Source: Telemetry dashboard decision log - TEL-341
