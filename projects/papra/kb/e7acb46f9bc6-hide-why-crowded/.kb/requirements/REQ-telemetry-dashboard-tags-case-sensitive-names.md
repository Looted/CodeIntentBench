---
title: Dashboard tags in the telemetry dashboard are compared exactly as typed; two dashboard tags that differ only by letter case are distinct.
status: active
semantic_text: Dashboard tags in the telemetry dashboard are compared exactly as typed; two dashboard tags that differ only by letter case are distinct.
semantic_clauses:
  - Dashboard tags in the telemetry dashboard are compared exactly as typed
  - two dashboard tags that differ only by letter case are distinct
logic_claims:
  - CLAIM-351713C996BEDF06
  - CLAIM-4FD622A0EBDFC33A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a4f12cdf612ab197c1542c5d1cff36f09633dfe5a9f838140b86f7b97f33739d
semantic_inventory:
  - claim_key: CLAIM-351713C996BEDF06
    claim_text: Dashboard tags in the telemetry dashboard are compared exactly as typed
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 71
    subjects:
      - telemetry.dashboard_tags
  - claim_key: CLAIM-4FD622A0EBDFC33A
    claim_text: two dashboard tags that differ only by letter case are distinct
    role: descriptive
    status: modeled
    span:
      start: 73
      end: 136
    subjects:
      - telemetry.dashboard_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-102'
  recorded_at: '2025-10-21T13:15:42.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
id: REQ-telemetry-dashboard-tags-case-sensitive-names
type: req
---
Dashboard tags in the telemetry dashboard are compared exactly as typed; two dashboard tags that differ only by letter case are distinct.

## Context

Reason not stated.

## Source

> docs(telemetry): dashboard tag names are case-sensitive (TEL-102)

Source: Telemetry dashboard decision log - TEL-102
