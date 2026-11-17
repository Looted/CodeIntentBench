---
title: Component groups on the status page are unique per site regardless of letter case; a duplicate is reported as component-group-already-exists.
status: active
semantic_text: Component groups on the status page are unique per site regardless of letter case; a duplicate is reported as component-group-already-exists.
semantic_clauses:
  - Component groups on the status page are unique per site regardless of letter case
  - a duplicate is reported as component-group-already-exists
logic_claims:
  - CLAIM-CBBCBD8BF3E388C2
  - CLAIM-CFD201B522321585
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3e1ef03d5a08dffd1112080d6a18b35fcc0678a474032de52a269549c1d93473
semantic_inventory:
  - claim_key: CLAIM-CBBCBD8BF3E388C2
    claim_text: Component groups on the status page are unique per site regardless of letter case
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 81
    subjects:
      - status.component_groups
  - claim_key: CLAIM-CFD201B522321585
    claim_text: a duplicate is reported as component-group-already-exists
    role: descriptive
    status: modeled
    span:
      start: 83
      end: 140
    subjects:
      - status.component_groups
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Status page runbook: STA-145'
  recorded_at: '2025-07-04T15:16:42.000Z'
tags:
  - bootstrap
  - knowledge-source:status-decisions
  - component:status
id: REQ-status-component-groups-unique-ignoring-case
type: req
---
Component groups on the status page are unique per site regardless of letter case; a duplicate is reported as component-group-already-exists.

## Context

Reason not stated.

## Source

> feat(status): case-insensitive unique component group names (STA-145)

Source: Status page runbook - STA-145
