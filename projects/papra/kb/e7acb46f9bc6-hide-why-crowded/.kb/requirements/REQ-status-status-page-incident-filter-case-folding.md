---
title: Matching in the status page incident filter ignores letter case and accents.
status: active
semantic_text: Matching in the status page incident filter ignores letter case and accents.
semantic_clauses:
  - Matching in the status page incident filter ignores letter case and accents
logic_claims:
  - CLAIM-37D6815FB612B5FD
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 7fcca2b659d784e2a415debffa0011a59706b8ac122d57fd98220912008259f1
semantic_inventory:
  - claim_key: CLAIM-37D6815FB612B5FD
    claim_text: Matching in the status page incident filter ignores letter case and accents
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 75
    subjects:
      - status.status_page_incident_filter
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Status page runbook: STA-198'
  recorded_at: '2025-12-27T13:39:05.000Z'
tags:
  - bootstrap
  - knowledge-source:status-decisions
  - component:status
rationale: Names are typed on phones, where capitals and accents are often left out.
id: REQ-status-status-page-incident-filter-case-folding
type: req
---
Matching in the status page incident filter ignores letter case and accents.

## Context

Names are typed on phones, where capitals and accents are often left out.

## Source

> feat(status): search case folding (STA-198)

Source: Status page runbook - STA-198
