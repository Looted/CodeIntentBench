---
title: A team can have at most 3 projects in the telemetry dashboard; the limit is configured per deployment and 3 is the default.
status: active
semantic_text: A team can have at most 3 projects in the telemetry dashboard; the limit is configured per deployment and 3 is the default.
semantic_clauses:
  - A team can have at most 3 projects in the telemetry dashboard
  - the limit is configured per deployment and 3 is the default
logic_claims:
  - CLAIM-0438B22D73F5B933
  - CLAIM-AF6717F4E0A15E09
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 5b0cf7cf9129073ff5353ca1e26aa150bbded696481946396982725029fab411
semantic_inventory:
  - claim_key: CLAIM-0438B22D73F5B933
    claim_text: A team can have at most 3 projects in the telemetry dashboard
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 61
    subjects:
      - telemetry.projects
  - claim_key: CLAIM-AF6717F4E0A15E09
    claim_text: the limit is configured per deployment and 3 is the default
    role: descriptive
    status: modeled
    span:
      start: 63
      end: 122
    subjects:
      - telemetry.projects
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-197'
  recorded_at: '2025-12-08T13:34:18.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
rationale: A handful of accounts had created thousands of projects and slowed the listing for everyone.
id: REQ-telemetry-projects-maximum-count
type: req
---
A team can have at most 3 projects in the telemetry dashboard; the limit is configured per deployment and 3 is the default.

## Context

A handful of accounts had created thousands of projects and slowed the listing for everyone.

## Source

> feat(telemetry): limit projects per team (TEL-197)

Source: Telemetry dashboard decision log - TEL-197
