---
title: At most 20 organization labels can be added or removed in one request in the Papra Cloud back office.
status: active
semantic_text: At most 20 organization labels can be added or removed in one request in the Papra Cloud back office.
semantic_clauses:
  - At most 20 organization labels can be added or removed in one request in the Papra Cloud back office
logic_claims:
  - CLAIM-071B2751FF057624
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c2642eec591dd81703031d5a0d410f84607ca96ecf1b044f4a81e572ae86f751
semantic_inventory:
  - claim_key: CLAIM-071B2751FF057624
    claim_text: At most 20 organization labels can be added or removed in one request in the Papra Cloud back office
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 100
    subjects:
      - backoffice.organization_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-205'
  recorded_at: '2025-08-13T14:44:11.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: Requests with more than 20 organization labels timed out on slow connections.
id: REQ-backoffice-organization-labels-batch-size
type: req
---
At most 20 organization labels can be added or removed in one request in the Papra Cloud back office.

## Context

Requests with more than 20 organization labels timed out on slow connections.

## Source

> feat(backoffice): batch organization labels, 20 per request (OPS-205)

Source: Papra Cloud back office handbook - OPS-205
