---
title: Deleting an incident label on the status page removes it from everything that uses it, without confirmation for each use.
status: active
semantic_text: Deleting an incident label on the status page removes it from everything that uses it, without confirmation for each use.
semantic_clauses:
  - Deleting an incident label on the status page removes it from everything that uses it, without confirmation for each use
logic_claims:
  - CLAIM-5F75658E22737C46
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 34e851f76f754cad131bba9874d8f93db2a8a8fb55ebd12c73d0dfd702f5796f
semantic_inventory:
  - claim_key: CLAIM-5F75658E22737C46
    claim_text: Deleting an incident label on the status page removes it from everything that uses it, without confirmation for each use
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 120
    subjects:
      - status.incident_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Status page runbook: STA-132'
  recorded_at: '2025-07-15T15:35:10.000Z'
tags:
  - bootstrap
  - knowledge-source:status-decisions
  - component:status
rationale: Asking for confirmation once per use made cleaning up incident labels impractical.
id: REQ-status-incident-labels-delete-in-use
type: req
---
Deleting an incident label on the status page removes it from everything that uses it, without confirmation for each use.

## Context

Asking for confirmation once per use made cleaning up incident labels impractical.

## Source

> feat(status): deleting an incident label detaches it (STA-132)

Source: Status page runbook - STA-132
