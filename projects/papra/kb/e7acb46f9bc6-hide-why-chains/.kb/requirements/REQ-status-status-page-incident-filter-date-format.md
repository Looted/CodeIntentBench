---
title: 'The started: filter of the status page incident filter accepts ISO dates and the words today, yesterday and last-week.'
status: active
semantic_text: 'The started: filter of the status page incident filter accepts ISO dates and the words today, yesterday and last-week.'
semantic_clauses:
  - 'The started: filter of the status page incident filter accepts ISO dates and the words today, yesterday and last-week'
logic_claims:
  - CLAIM-8B5879EF3F8A102A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2a2cab630092ed2832308ec6e4e4b8695e396b0462699f24ba2999bac68751ba
semantic_inventory:
  - claim_key: CLAIM-8B5879EF3F8A102A
    claim_text: 'The started: filter of the status page incident filter accepts ISO dates and the words today, yesterday and last-week'
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 117
    subjects:
      - status.status_page_incident_filter
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Status page runbook: STA-203'
  recorded_at: '2025-03-21T11:14:08.000Z'
tags:
  - bootstrap
  - knowledge-source:status-decisions
  - component:status
rationale: These are the forms people were seen typing in the search logs.
id: REQ-status-status-page-incident-filter-date-format
type: req
---
The started: filter of the status page incident filter accepts ISO dates and the words today, yesterday and last-week.

## Context

These are the forms people were seen typing in the search logs.

## Source

> feat(status): date formats of the started: filter (STA-203)

Source: Status page runbook - STA-203
