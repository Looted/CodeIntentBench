---
title: Asking for a password reset for an address that has no account among telemetry dashboard accounts gives the same answer as for one that does.
status: active
semantic_text: Asking for a password reset for an address that has no account among telemetry dashboard accounts gives the same answer as for one that does.
semantic_clauses:
  - Asking for a password reset for an address that has no account among telemetry dashboard accounts gives the same answer as for one that does
logic_claims:
  - CLAIM-54803DEC8F8A9D07
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 16721b2b136d078ebb58cc5ec6262b4dd3f3054411c90ade160725574be30c2e
semantic_inventory:
  - claim_key: CLAIM-54803DEC8F8A9D07
    claim_text: Asking for a password reset for an address that has no account among telemetry dashboard accounts gives the same answer as for one that does
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 140
    subjects:
      - telemetry.telemetry_dashboard_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-326'
  recorded_at: '2026-05-03T08:26:32.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
rationale: The form could be used to check whether an address had an account.
id: REQ-telemetry-telemetry-dashboard-accounts-reset-unknown-address
type: req
---
Asking for a password reset for an address that has no account among telemetry dashboard accounts gives the same answer as for one that does.

## Context

The form could be used to check whether an address had an account.

## Source

> fix(telemetry): do not reveal accounts on reset (TEL-326)

Source: Telemetry dashboard decision log - TEL-326
