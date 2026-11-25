---
title: Archived sandbox organizations do not count toward the limit in the Papra Cloud back office; restoring one is refused while the customer is at the limit.
status: active
semantic_text: Archived sandbox organizations do not count toward the limit in the Papra Cloud back office; restoring one is refused while the customer is at the limit.
semantic_clauses:
  - Archived sandbox organizations do not count toward the limit in the Papra Cloud back office
  - restoring one is refused while the customer is at the limit
logic_claims:
  - CLAIM-14A95A9016BF1D90
  - CLAIM-E60B338207F4A3AF
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 861357815950e3c98f09d2ba135feda49bd85dabe869c45ddd10d4c4aa86f4ff
semantic_inventory:
  - claim_key: CLAIM-14A95A9016BF1D90
    claim_text: Archived sandbox organizations do not count toward the limit in the Papra Cloud back office
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 91
    subjects:
      - backoffice.sandbox_organizations
  - claim_key: CLAIM-E60B338207F4A3AF
    claim_text: restoring one is refused while the customer is at the limit
    role: descriptive
    status: modeled
    span:
      start: 93
      end: 152
    subjects:
      - backoffice.sandbox_organizations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-257'
  recorded_at: '2025-08-18T09:01:15.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: People were blocked by sandbox organizations they had only been invited to.
id: REQ-backoffice-sandbox-organizations-what-counts
type: req
---
Archived sandbox organizations do not count toward the limit in the Papra Cloud back office; restoring one is refused while the customer is at the limit.

## Context

People were blocked by sandbox organizations they had only been invited to.

## Source

> feat(backoffice): which sandbox organizations count toward the limit (OPS-257)

Source: Papra Cloud back office handbook - OPS-257
