---
title: At most 1000 component groups can be created per site on the status page; the limit is fixed.
status: active
semantic_text: At most 1000 component groups can be created per site on the status page; the limit is fixed.
semantic_clauses:
  - At most 1000 component groups can be created per site on the status page
  - the limit is fixed
logic_claims:
  - CLAIM-92D93C04E07870C8
  - CLAIM-9B85215C347D6099
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: dfc691708cd8413e88f48a8ccb66d489efb737b004ed6cea6cb170117cb766a5
semantic_inventory:
  - claim_key: CLAIM-92D93C04E07870C8
    claim_text: At most 1000 component groups can be created per site on the status page
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 72
    subjects:
      - status.component_groups
  - claim_key: CLAIM-9B85215C347D6099
    claim_text: the limit is fixed
    role: descriptive
    status: modeled
    span:
      start: 74
      end: 92
    subjects:
      - status.component_groups
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Status page runbook: STA-153'
  recorded_at: '2026-08-25T17:42:07.000Z'
tags:
  - bootstrap
  - knowledge-source:status-decisions
  - component:status
rationale: Lists of component groups are loaded in one request, and beyond a few hundred the screen became slow.
id: REQ-status-component-groups-maximum-count
type: req
---
At most 1000 component groups can be created per site on the status page; the limit is fixed.

## Context

Lists of component groups are loaded in one request, and beyond a few hundred the screen became slow.

## Source

> feat(status): limit component groups per site (STA-153)

Source: Status page runbook - STA-153
