---
title: Incident label names on the status page are limited to 48 characters.
status: active
semantic_text: Incident label names on the status page are limited to 48 characters.
semantic_clauses:
  - Incident label names on the status page are limited to 48 characters
logic_claims:
  - CLAIM-BC563D4B6F005BC5
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a293f592db08253482f03b23ae0c294f4756fb84506350d91e87e634d7fdcb72
semantic_inventory:
  - claim_key: CLAIM-BC563D4B6F005BC5
    claim_text: Incident label names on the status page are limited to 48 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 68
    subjects:
      - status.incident_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Status page runbook: STA-117'
  recorded_at: '2025-10-22T15:41:04.000Z'
tags:
  - bootstrap
  - knowledge-source:status-decisions
  - component:status
rationale: The column that stores the name is 48 characters wide.
id: REQ-status-incident-labels-name-length
type: req
---
Incident label names on the status page are limited to 48 characters.

## Context

The column that stores the name is 48 characters wide.

## Source

> feat(status): cap incident label name length at 48 (STA-117)

Source: Status page runbook - STA-117
