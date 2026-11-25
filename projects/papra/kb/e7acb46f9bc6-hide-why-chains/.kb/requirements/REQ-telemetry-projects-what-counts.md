---
title: Every project the team can access counts toward the limit in the telemetry dashboard; that includes ones shared with them.
status: active
semantic_text: Every project the team can access counts toward the limit in the telemetry dashboard; that includes ones shared with them.
semantic_clauses:
  - Every project the team can access counts toward the limit in the telemetry dashboard
  - that includes ones shared with them
logic_claims:
  - CLAIM-696E7D3C8D12BA3B
  - CLAIM-70BD504DC2647196
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 7194e47d269a6275509af55a6f8ca7f106ab450bf9ee08a13777e03a20ecbe5f
semantic_inventory:
  - claim_key: CLAIM-696E7D3C8D12BA3B
    claim_text: Every project the team can access counts toward the limit in the telemetry dashboard
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 84
    subjects:
      - telemetry.projects
  - claim_key: CLAIM-70BD504DC2647196
    claim_text: that includes ones shared with them
    role: descriptive
    status: modeled
    span:
      start: 86
      end: 121
    subjects:
      - telemetry.projects
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-285'
  recorded_at: '2026-06-28T14:15:08.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
id: REQ-telemetry-projects-what-counts
type: req
---
Every project the team can access counts toward the limit in the telemetry dashboard; that includes ones shared with them.

## Context

Reason not stated.

## Source

> feat(telemetry): which projects count toward the limit (TEL-285)

Source: Telemetry dashboard decision log - TEL-285
