---
title: A team can hold at most 25 dashboard tags in the telemetry dashboard; the limit is configurable and 25 is the default.
status: active
semantic_text: A team can hold at most 25 dashboard tags in the telemetry dashboard; the limit is configurable and 25 is the default.
semantic_clauses:
  - A team can hold at most 25 dashboard tags in the telemetry dashboard
  - the limit is configurable and 25 is the default
logic_claims:
  - CLAIM-D3D6B7B1DF0AE768
  - CLAIM-73970E3A150076DB
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: febc42fd13c31e94819596b710a4de9fc2339fe25b02fb8ffec8a71c98fb73b9
semantic_inventory:
  - claim_key: CLAIM-D3D6B7B1DF0AE768
    claim_text: A team can hold at most 25 dashboard tags in the telemetry dashboard
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 68
    subjects:
      - telemetry.dashboard_tags
  - claim_key: CLAIM-73970E3A150076DB
    claim_text: the limit is configurable and 25 is the default
    role: descriptive
    status: modeled
    span:
      start: 70
      end: 117
    subjects:
      - telemetry.dashboard_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-105'
  recorded_at: '2025-12-23T09:40:41.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
rationale: Lists of dashboard tags are loaded in one request, and beyond a few hundred the screen became slow.
id: REQ-telemetry-dashboard-tags-maximum-count
type: req
---
A team can hold at most 25 dashboard tags in the telemetry dashboard; the limit is configurable and 25 is the default.

## Context

Lists of dashboard tags are loaded in one request, and beyond a few hundred the screen became slow.

## Source

> feat(telemetry): limit dashboard tags per team (TEL-105)

Source: Telemetry dashboard decision log - TEL-105
