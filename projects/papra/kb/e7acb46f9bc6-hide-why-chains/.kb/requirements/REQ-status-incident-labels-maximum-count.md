---
title: A site can hold at most 300 incident labels on the status page; the limit is fixed.
status: active
semantic_text: A site can hold at most 300 incident labels on the status page; the limit is fixed.
semantic_clauses:
  - A site can hold at most 300 incident labels on the status page
  - the limit is fixed
logic_claims:
  - CLAIM-719306FDAE5C6E83
  - CLAIM-9B85215C347D6099
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8c36bb0efdec00570b797ca5c80fa53e00add27f8acf037fca9d4ada47b0a228
semantic_inventory:
  - claim_key: CLAIM-719306FDAE5C6E83
    claim_text: A site can hold at most 300 incident labels on the status page
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 62
    subjects:
      - status.incident_labels
  - claim_key: CLAIM-9B85215C347D6099
    claim_text: the limit is fixed
    role: descriptive
    status: modeled
    span:
      start: 64
      end: 82
    subjects:
      - status.incident_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Status page runbook: STA-116'
  recorded_at: '2026-08-13T16:20:42.000Z'
tags:
  - bootstrap
  - knowledge-source:status-decisions
  - component:status
id: REQ-status-incident-labels-maximum-count
type: req
---
A site can hold at most 300 incident labels on the status page; the limit is fixed.

## Context

Reason not stated.

## Source

> feat(status): limit incident labels per site (STA-116)

Source: Status page runbook - STA-116
