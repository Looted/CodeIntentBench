---
title: Component group names on the status page are limited to 32 characters.
status: active
semantic_text: Component group names on the status page are limited to 32 characters.
semantic_clauses:
  - Component group names on the status page are limited to 32 characters
logic_claims:
  - CLAIM-32B0150940DA9E87
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 7e68aa2dbc4940f92096ad2a9338bd2c9ac50377551b6ee4b32e27289f189eb7
semantic_inventory:
  - claim_key: CLAIM-32B0150940DA9E87
    claim_text: Component group names on the status page are limited to 32 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 69
    subjects:
      - status.component_groups
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Status page runbook: STA-155'
  recorded_at: '2025-09-08T14:30:30.000Z'
tags:
  - bootstrap
  - knowledge-source:status-decisions
  - component:status
rationale: Longer names broke the layout of the list where component groups are shown.
id: REQ-status-component-groups-name-length
type: req
---
Component group names on the status page are limited to 32 characters.

## Context

Longer names broke the layout of the list where component groups are shown.

## Source

> feat(status): cap component group name length at 32 (STA-155)

Source: Status page runbook - STA-155
