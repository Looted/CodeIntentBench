---
title: An user can have at most 5 dashboards in the telemetry dashboard; the limit is the same for everyone.
status: active
semantic_text: An user can have at most 5 dashboards in the telemetry dashboard; the limit is the same for everyone.
semantic_clauses:
  - An user can have at most 5 dashboards in the telemetry dashboard
  - the limit is the same for everyone
logic_claims:
  - CLAIM-3E967EC61F5821AF
  - CLAIM-950BC8C0A4D47D22
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1b39acd698178d502f839cce206666f4d16d4527a4735573141d8318ba1b345a
semantic_inventory:
  - claim_key: CLAIM-3E967EC61F5821AF
    claim_text: An user can have at most 5 dashboards in the telemetry dashboard
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 64
    subjects:
      - telemetry.dashboards
  - claim_key: CLAIM-950BC8C0A4D47D22
    claim_text: the limit is the same for everyone
    role: descriptive
    status: modeled
    span:
      start: 66
      end: 100
    subjects:
      - telemetry.dashboards
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-260'
  recorded_at: '2026-03-03T12:23:19.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
id: REQ-telemetry-dashboards-maximum-count
type: req
---
An user can have at most 5 dashboards in the telemetry dashboard; the limit is the same for everyone.

## Context

Reason not stated.

## Why this changed

Reason not stated. TEL-260 replaces the value recorded in TEL-205 without saying why it changed.

## Source

> feat(telemetry): limit dashboards per user (TEL-260)

Source: Telemetry dashboard decision log - TEL-260
