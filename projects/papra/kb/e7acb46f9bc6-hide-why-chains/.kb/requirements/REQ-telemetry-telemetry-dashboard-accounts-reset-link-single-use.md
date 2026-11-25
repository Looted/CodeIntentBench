---
title: A password reset link for telemetry dashboard accounts works once; requesting a new link invalidates the earlier ones.
status: active
semantic_text: A password reset link for telemetry dashboard accounts works once; requesting a new link invalidates the earlier ones.
semantic_clauses:
  - A password reset link for telemetry dashboard accounts works once
  - requesting a new link invalidates the earlier ones
logic_claims:
  - CLAIM-FFC6E09AED76AD1B
  - CLAIM-A6758D585E12B6CF
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0d6c4efe2f38f1ee784f3e092bccbeec45225248d6aaebf94fa88e5d65ebe219
semantic_inventory:
  - claim_key: CLAIM-FFC6E09AED76AD1B
    claim_text: A password reset link for telemetry dashboard accounts works once
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 65
    subjects:
      - telemetry.telemetry_dashboard_accounts
  - claim_key: CLAIM-A6758D585E12B6CF
    claim_text: requesting a new link invalidates the earlier ones
    role: descriptive
    status: modeled
    span:
      start: 67
      end: 117
    subjects:
      - telemetry.telemetry_dashboard_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-324'
  recorded_at: '2026-04-06T12:25:43.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
id: REQ-telemetry-telemetry-dashboard-accounts-reset-link-single-use
type: req
---
A password reset link for telemetry dashboard accounts works once; requesting a new link invalidates the earlier ones.

## Context

Reason not stated.

## Source

> feat(telemetry): single-use reset links (TEL-324)

Source: Telemetry dashboard decision log - TEL-324
