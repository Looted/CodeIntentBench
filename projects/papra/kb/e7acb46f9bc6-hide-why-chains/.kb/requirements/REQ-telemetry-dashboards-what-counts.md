---
title: Only dashboards the user owns count toward the limit in the telemetry dashboard; dashboards shared with them do not count.
status: active
semantic_text: Only dashboards the user owns count toward the limit in the telemetry dashboard; dashboards shared with them do not count.
semantic_clauses:
  - Only dashboards the user owns count toward the limit in the telemetry dashboard
  - dashboards shared with them do not count
logic_claims:
  - CLAIM-C7EAFD9B57E9F480
  - CLAIM-338CE7AC03C9DEFE
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1e0d40c39850737819a6e401c499720ada8cb42b6bc067a4bd19de07abc22ab5
semantic_inventory:
  - claim_key: CLAIM-C7EAFD9B57E9F480
    claim_text: Only dashboards the user owns count toward the limit in the telemetry dashboard
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 79
    subjects:
      - telemetry.dashboards
  - claim_key: CLAIM-338CE7AC03C9DEFE
    claim_text: dashboards shared with them do not count
    role: descriptive
    status: modeled
    span:
      start: 81
      end: 121
    subjects:
      - telemetry.dashboards
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-261'
  recorded_at: '2025-05-03T13:38:59.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
id: REQ-telemetry-dashboards-what-counts
type: req
---
Only dashboards the user owns count toward the limit in the telemetry dashboard; dashboards shared with them do not count.

## Context

Reason not stated.

## Source

> feat(telemetry): which dashboards count toward the limit (TEL-261)

Source: Telemetry dashboard decision log - TEL-261
