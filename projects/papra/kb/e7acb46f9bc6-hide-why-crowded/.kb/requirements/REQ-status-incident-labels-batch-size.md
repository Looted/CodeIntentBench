---
title: At most 5 incident labels can be added or removed in one request on the status page.
status: active
semantic_text: At most 5 incident labels can be added or removed in one request on the status page.
semantic_clauses:
  - At most 5 incident labels can be added or removed in one request on the status page
logic_claims:
  - CLAIM-B53B24720FFD65DB
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c971baeff185e541448ec8b81031737f9739d1afa8ff86272a4f84f07ae05d63
semantic_inventory:
  - claim_key: CLAIM-B53B24720FFD65DB
    claim_text: At most 5 incident labels can be added or removed in one request on the status page
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 83
    subjects:
      - status.incident_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Status page runbook: STA-140'
  recorded_at: '2026-02-21T08:10:33.000Z'
tags:
  - bootstrap
  - knowledge-source:status-decisions
  - component:status
rationale: Requests with more than 5 incident labels timed out on slow connections.
id: REQ-status-incident-labels-batch-size
type: req
---
At most 5 incident labels can be added or removed in one request on the status page.

## Context

Requests with more than 5 incident labels timed out on slow connections.

## Source

> feat(status): batch incident labels, 5 per request (STA-140)

Source: Status page runbook - STA-140
