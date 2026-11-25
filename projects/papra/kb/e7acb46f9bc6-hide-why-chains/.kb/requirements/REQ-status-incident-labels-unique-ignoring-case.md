---
title: Incident labels on the status page are unique per site regardless of letter case; a duplicate is reported as incident-label-already-exists.
status: active
semantic_text: Incident labels on the status page are unique per site regardless of letter case; a duplicate is reported as incident-label-already-exists.
semantic_clauses:
  - Incident labels on the status page are unique per site regardless of letter case
  - a duplicate is reported as incident-label-already-exists
logic_claims:
  - CLAIM-FBA6BCCF55FEC054
  - CLAIM-50675D5F34B05A0D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 44aff2d8f4ebafd7ebb1fb1655dc280dfd32328681f59a4f1274d2e7aa493d38
semantic_inventory:
  - claim_key: CLAIM-FBA6BCCF55FEC054
    claim_text: Incident labels on the status page are unique per site regardless of letter case
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 80
    subjects:
      - status.incident_labels
  - claim_key: CLAIM-50675D5F34B05A0D
    claim_text: a duplicate is reported as incident-label-already-exists
    role: descriptive
    status: modeled
    span:
      start: 82
      end: 138
    subjects:
      - status.incident_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Status page runbook: STA-108'
  recorded_at: '2026-09-10T13:32:52.000Z'
tags:
  - bootstrap
  - knowledge-source:status-decisions
  - component:status
rationale: Imports from other tools produced "Incident label" and "incident label" side by side, and reports counted them separately.
id: REQ-status-incident-labels-unique-ignoring-case
type: req
---
Incident labels on the status page are unique per site regardless of letter case; a duplicate is reported as incident-label-already-exists.

## Context

Imports from other tools produced "Incident label" and "incident label" side by side, and reports counted them separately.

## Source

> feat(status): case-insensitive unique incident label names (STA-108)

Source: Status page runbook - STA-108
