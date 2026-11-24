---
title: Password reset links for telemetry dashboard accounts are valid for 15 minutes.
status: active
semantic_text: Password reset links for telemetry dashboard accounts are valid for 15 minutes.
semantic_clauses:
  - Password reset links for telemetry dashboard accounts are valid for 15 minutes
logic_claims:
  - CLAIM-54C5092ABB785927
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2a9e5b875a068c102b803f70ee820f62976320913fcbf08e9f5fe4e06620c327
semantic_inventory:
  - claim_key: CLAIM-54C5092ABB785927
    claim_text: Password reset links for telemetry dashboard accounts are valid for 15 minutes
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 78
    subjects:
      - telemetry.telemetry_dashboard_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-322'
  recorded_at: '2026-09-24T16:44:12.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
id: REQ-telemetry-telemetry-dashboard-accounts-reset-link-validity
type: req
---
Password reset links for telemetry dashboard accounts are valid for 15 minutes.

## Context

Reason not stated.

## Why this changed

TEL-322 replaced the value recorded in TEL-252 and gives this reason for the change: Mail to some providers took longer than that to arrive.

## Source

> feat(telemetry): reset links valid 15 minutes (TEL-322)

Source: Telemetry dashboard decision log - TEL-322
