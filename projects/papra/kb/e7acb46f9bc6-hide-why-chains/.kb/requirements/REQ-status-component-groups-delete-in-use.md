---
title: Deleting a component group on the status page removes it from everything that uses it, without confirmation for each use.
status: active
semantic_text: Deleting a component group on the status page removes it from everything that uses it, without confirmation for each use.
semantic_clauses:
  - Deleting a component group on the status page removes it from everything that uses it, without confirmation for each use
logic_claims:
  - CLAIM-9C07CAD421BCAD0F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 39978eb9e5859382650e023489c77f57b5486286974f1e9a5bffba6a92288f76
semantic_inventory:
  - claim_key: CLAIM-9C07CAD421BCAD0F
    claim_text: Deleting a component group on the status page removes it from everything that uses it, without confirmation for each use
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 120
    subjects:
      - status.component_groups
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Status page runbook: STA-174'
  recorded_at: '2025-12-10T15:30:26.000Z'
tags:
  - bootstrap
  - knowledge-source:status-decisions
  - component:status
rationale: Asking for confirmation once per use made cleaning up component groups impractical.
id: REQ-status-component-groups-delete-in-use
type: req
---
Deleting a component group on the status page removes it from everything that uses it, without confirmation for each use.

## Context

Asking for confirmation once per use made cleaning up component groups impractical.

## Source

> feat(status): deleting a component group detaches it (STA-174)

Source: Status page runbook - STA-174
