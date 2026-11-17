---
title: Component group names on the status page are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
status: active
semantic_text: Component group names on the status page are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
semantic_clauses:
  - Component group names on the status page are trimmed of leading and trailing whitespace before they are saved
  - a name that is empty after trimming is refused
logic_claims:
  - CLAIM-E7BF366B7B17158E
  - CLAIM-70D5F8163A64221A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 40d6e76e66a2c7b41474da3cd9f15261b23f5a159cfeefbbb218f3c53dd768eb
semantic_inventory:
  - claim_key: CLAIM-E7BF366B7B17158E
    claim_text: Component group names on the status page are trimmed of leading and trailing whitespace before they are saved
    role: normative
    status: modeled
    span:
      start: 0
      end: 109
    subjects:
      - status.component_groups
  - claim_key: CLAIM-70D5F8163A64221A
    claim_text: a name that is empty after trimming is refused
    role: descriptive
    status: modeled
    span:
      start: 111
      end: 157
    subjects:
      - status.component_groups
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Status page runbook: STA-163'
  recorded_at: '2025-04-10T08:01:35.000Z'
tags:
  - bootstrap
  - knowledge-source:status-decisions
  - component:status
id: REQ-status-component-groups-names-trimmed
type: req
---
Component group names on the status page are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.

## Context

Reason not stated.

## Source

> fix(status): trim component group names (STA-163)

Source: Status page runbook - STA-163
