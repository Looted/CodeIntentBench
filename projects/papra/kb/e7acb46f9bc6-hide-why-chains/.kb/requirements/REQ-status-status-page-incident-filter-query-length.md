---
title: A query in the status page incident filter is limited to 200 characters; longer input is rejected with a validation error.
status: active
semantic_text: A query in the status page incident filter is limited to 200 characters; longer input is rejected with a validation error.
semantic_clauses:
  - A query in the status page incident filter is limited to 200 characters
  - longer input is rejected with a validation error
logic_claims:
  - CLAIM-487C923C79D520D7
  - CLAIM-778F39B5CA222673
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1447d8d089168575152770e7ff0838d305584f37f061cdbd44df7296fb96c5b0
semantic_inventory:
  - claim_key: CLAIM-487C923C79D520D7
    claim_text: A query in the status page incident filter is limited to 200 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 71
    subjects:
      - status.status_page_incident_filter
  - claim_key: CLAIM-778F39B5CA222673
    claim_text: longer input is rejected with a validation error
    role: normative
    status: modeled
    span:
      start: 73
      end: 121
    subjects:
      - status.status_page_incident_filter
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Status page runbook: STA-178'
  recorded_at: '2025-05-10T10:34:43.000Z'
tags:
  - bootstrap
  - knowledge-source:status-decisions
  - component:status
id: REQ-status-status-page-incident-filter-query-length
type: req
---
A query in the status page incident filter is limited to 200 characters; longer input is rejected with a validation error.

## Context

Reason not stated.

## Source

> feat(status): limit search query length to 200 (STA-178)

Source: Status page runbook - STA-178
