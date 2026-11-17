---
title: Dashboard tag names in the telemetry dashboard are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is r…
status: active
semantic_text: Dashboard tag names in the telemetry dashboard are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
semantic_clauses:
  - Dashboard tag names in the telemetry dashboard are trimmed of leading and trailing whitespace before they are saved
  - a name that is empty after trimming is refused
logic_claims:
  - CLAIM-25555C0585C46397
  - CLAIM-70D5F8163A64221A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 23778c7ba80d3fe3efabe1f9d8ec33f1758e37596e427b99317f97851949e11a
semantic_inventory:
  - claim_key: CLAIM-25555C0585C46397
    claim_text: Dashboard tag names in the telemetry dashboard are trimmed of leading and trailing whitespace before they are saved
    role: normative
    status: modeled
    span:
      start: 0
      end: 115
    subjects:
      - telemetry.dashboard_tags
  - claim_key: CLAIM-70D5F8163A64221A
    claim_text: a name that is empty after trimming is refused
    role: descriptive
    status: modeled
    span:
      start: 117
      end: 163
    subjects:
      - telemetry.dashboard_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-113'
  recorded_at: '2025-12-24T09:20:42.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
rationale: Pasted names carried trailing spaces and produced dashboard tags that looked identical but were not.
id: REQ-telemetry-dashboard-tags-names-trimmed
type: req
---
Dashboard tag names in the telemetry dashboard are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.

## Context

Pasted names carried trailing spaces and produced dashboard tags that looked identical but were not.

## Source

> fix(telemetry): trim dashboard tag names (TEL-113)

Source: Telemetry dashboard decision log - TEL-113
