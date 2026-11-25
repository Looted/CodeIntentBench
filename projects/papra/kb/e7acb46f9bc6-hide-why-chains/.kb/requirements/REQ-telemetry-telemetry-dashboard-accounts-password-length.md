---
title: Passwords of telemetry dashboard accounts are at least 8 characters long; there is no rule about character classes.
status: active
semantic_text: Passwords of telemetry dashboard accounts are at least 8 characters long; there is no rule about character classes.
semantic_clauses:
  - Passwords of telemetry dashboard accounts are at least 8 characters long
  - there is no rule about character classes
logic_claims:
  - CLAIM-EBA3E76DF54692D5
  - CLAIM-3BB7AA89852B2146
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c31027251a21a45549991c09f02dab2548f9113ace09615a4f43a034cf42ef48
semantic_inventory:
  - claim_key: CLAIM-EBA3E76DF54692D5
    claim_text: Passwords of telemetry dashboard accounts are at least 8 characters long
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 72
    subjects:
      - telemetry.telemetry_dashboard_accounts
  - claim_key: CLAIM-3BB7AA89852B2146
    claim_text: there is no rule about character classes
    role: descriptive
    status: modeled
    span:
      start: 74
      end: 114
    subjects:
      - telemetry.telemetry_dashboard_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-346'
  recorded_at: '2026-04-27T13:21:13.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
rationale: Length does more than rules about symbols, which people satisfy with "!" at the end.
id: REQ-telemetry-telemetry-dashboard-accounts-password-length
type: req
---
Passwords of telemetry dashboard accounts are at least 8 characters long; there is no rule about character classes.

## Context

Length does more than rules about symbols, which people satisfy with "!" at the end.

## Source

> feat(telemetry): password minimum length 8 (TEL-346)

Source: Telemetry dashboard decision log - TEL-346
