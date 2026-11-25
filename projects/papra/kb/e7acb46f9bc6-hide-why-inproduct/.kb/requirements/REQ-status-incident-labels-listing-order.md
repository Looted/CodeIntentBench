---
title: Incident labels on the status page are listed alphabetically, ignoring letter case.
status: active
semantic_text: Incident labels on the status page are listed alphabetically, ignoring letter case.
semantic_clauses:
  - Incident labels on the status page are listed alphabetically, ignoring letter case
logic_claims:
  - CLAIM-F0B25DF408A177F8
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 4d03cde01a354020bc0c26d6feb08fd8a1f08cccd19551bd9693796c35ab9ad8
semantic_inventory:
  - claim_key: CLAIM-F0B25DF408A177F8
    claim_text: Incident labels on the status page are listed alphabetically, ignoring letter case
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 82
    subjects:
      - status.incident_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Status page runbook: STA-127'
  recorded_at: '2025-08-21T16:21:12.000Z'
tags:
  - bootstrap
  - knowledge-source:status-decisions
  - component:status
rationale: The most used incident labels are the ones picked again, so they come first.
id: REQ-status-incident-labels-listing-order
type: req
---
Incident labels on the status page are listed alphabetically, ignoring letter case.

## Context

The most used incident labels are the ones picked again, so they come first.

## Source

> feat(status): order incident labels alphabetically (STA-127)

Source: Status page runbook - STA-127
