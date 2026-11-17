---
title: The status page incident filter runs only once the query has at least 2 characters.
status: active
semantic_text: The status page incident filter runs only once the query has at least 2 characters.
semantic_clauses:
  - The status page incident filter runs only once the query has at least 2 characters
logic_claims:
  - CLAIM-ADC5837B4E295941
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 833dd60ee3ca09ffc426fd95b72a05987678297ec9c7aed12ee56ccbaafa61ff
semantic_inventory:
  - claim_key: CLAIM-ADC5837B4E295941
    claim_text: The status page incident filter runs only once the query has at least 2 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 82
    subjects:
      - status.status_page_incident_filter
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Status page runbook: STA-189'
  recorded_at: '2026-03-10T12:49:34.000Z'
tags:
  - bootstrap
  - knowledge-source:status-decisions
  - component:status
rationale: One-letter queries matched nearly everything and were slow to render.
id: REQ-status-status-page-incident-filter-minimum-length
type: req
---
The status page incident filter runs only once the query has at least 2 characters.

## Context

One-letter queries matched nearly everything and were slow to render.

## Source

> feat(status): minimum query length 2 (STA-189)

Source: Status page runbook - STA-189
