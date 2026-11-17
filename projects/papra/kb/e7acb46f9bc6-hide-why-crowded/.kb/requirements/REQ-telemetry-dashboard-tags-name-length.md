---
title: Dashboard tag names in the telemetry dashboard are limited to 32 characters.
status: active
semantic_text: Dashboard tag names in the telemetry dashboard are limited to 32 characters.
semantic_clauses:
  - Dashboard tag names in the telemetry dashboard are limited to 32 characters
logic_claims:
  - CLAIM-B240695E1C1C5F33
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8d92753963b1367229ca90a380e21576bbdaef0c818ed37c99a5af15572aad43
semantic_inventory:
  - claim_key: CLAIM-B240695E1C1C5F33
    claim_text: Dashboard tag names in the telemetry dashboard are limited to 32 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 75
    subjects:
      - telemetry.dashboard_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-108'
  recorded_at: '2025-04-03T10:24:53.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
rationale: The column that stores the name is 32 characters wide.
id: REQ-telemetry-dashboard-tags-name-length
type: req
---
Dashboard tag names in the telemetry dashboard are limited to 32 characters.

## Context

The column that stores the name is 32 characters wide.

## Source

> feat(telemetry): cap dashboard tag name length at 32 (TEL-108)

Source: Telemetry dashboard decision log - TEL-108
