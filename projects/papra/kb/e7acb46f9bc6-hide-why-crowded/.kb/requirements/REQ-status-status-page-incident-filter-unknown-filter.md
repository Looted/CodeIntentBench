---
title: A filter name that the status page incident filter does not know is treated as plain search text.
status: active
semantic_text: A filter name that the status page incident filter does not know is treated as plain search text.
semantic_clauses:
  - A filter name that the status page incident filter does not know is treated as plain search text
logic_claims:
  - CLAIM-52A98C5471BD7175
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e9f571f85087aebf0c973f41f43c5c9fb1ac28d5a47e7c1478b1654e747ded79
semantic_inventory:
  - claim_key: CLAIM-52A98C5471BD7175
    claim_text: A filter name that the status page incident filter does not know is treated as plain search text
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 96
    subjects:
      - status.status_page_incident_filter
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Status page runbook: STA-206'
  recorded_at: '2026-03-08T17:44:17.000Z'
tags:
  - bootstrap
  - knowledge-source:status-decisions
  - component:status
rationale: Text with a colon in it, such as a time, is a common thing to search for.
id: REQ-status-status-page-incident-filter-unknown-filter
type: req
---
A filter name that the status page incident filter does not know is treated as plain search text.

## Context

Text with a colon in it, such as a time, is a common thing to search for.

## Source

> feat(status): unknown search filters (STA-206)

Source: Status page runbook - STA-206
