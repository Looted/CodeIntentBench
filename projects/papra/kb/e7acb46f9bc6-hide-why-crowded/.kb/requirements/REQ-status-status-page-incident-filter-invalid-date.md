---
title: 'An invalid date in the started: filter of the status page incident filter is ignored and the other filters still apply.'
status: active
semantic_text: 'An invalid date in the started: filter of the status page incident filter is ignored and the other filters still apply.'
semantic_clauses:
  - 'An invalid date in the started: filter of the status page incident filter is ignored and the other filters still apply'
logic_claims:
  - CLAIM-F58D28C258FD286F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 832fd101315d06856774a1d19cc3b4f05fb892d0655c027cb0fc965c071fd4b3
semantic_inventory:
  - claim_key: CLAIM-F58D28C258FD286F
    claim_text: 'An invalid date in the started: filter of the status page incident filter is ignored and the other filters still apply'
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 118
    subjects:
      - status.status_page_incident_filter
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Status page runbook: STA-180'
  recorded_at: '2025-11-08T12:50:41.000Z'
tags:
  - bootstrap
  - knowledge-source:status-decisions
  - component:status
id: REQ-status-status-page-incident-filter-invalid-date
type: req
---
An invalid date in the started: filter of the status page incident filter is ignored and the other filters still apply.

## Context

Reason not stated.

## Source

> fix(status): invalid date in started: filter (STA-180)

Source: Status page runbook - STA-180
