---
title: Archived organizations do not count toward the limit in the Papra Cloud back office; restoring one is refused while the billing account is at the limit.
status: active
semantic_text: Archived organizations do not count toward the limit in the Papra Cloud back office; restoring one is refused while the billing account is at the limit.
semantic_clauses:
  - Archived organizations do not count toward the limit in the Papra Cloud back office
  - restoring one is refused while the billing account is at the limit
logic_claims:
  - CLAIM-77BFF44CFB052EAC
  - CLAIM-70EC545E5071BA60
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2a7701cbaea38d4b3e6b77487220619c4724bb4fe2a5ab07aabe5e811e857091
semantic_inventory:
  - claim_key: CLAIM-77BFF44CFB052EAC
    claim_text: Archived organizations do not count toward the limit in the Papra Cloud back office
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 83
    subjects:
      - backoffice.organizations
  - claim_key: CLAIM-70EC545E5071BA60
    claim_text: restoring one is refused while the billing account is at the limit
    role: descriptive
    status: modeled
    span:
      start: 85
      end: 151
    subjects:
      - backoffice.organizations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-231'
  recorded_at: '2026-02-24T14:05:05.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: Archiving had become a way around the limit.
id: REQ-backoffice-organizations-what-counts
type: req
---
Archived organizations do not count toward the limit in the Papra Cloud back office; restoring one is refused while the billing account is at the limit.

## Context

Archiving had become a way around the limit.

## Source

> feat(backoffice): which organizations count toward the limit (OPS-231)

Source: Papra Cloud back office handbook - OPS-231
