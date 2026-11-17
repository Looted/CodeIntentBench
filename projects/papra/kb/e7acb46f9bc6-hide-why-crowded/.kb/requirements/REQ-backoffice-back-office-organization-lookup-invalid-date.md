---
title: 'An invalid date in the created: filter of the back office organization lookup is ignored and the other filters still apply.'
status: active
semantic_text: 'An invalid date in the created: filter of the back office organization lookup is ignored and the other filters still apply.'
semantic_clauses:
  - 'An invalid date in the created: filter of the back office organization lookup is ignored and the other filters still apply'
logic_claims:
  - CLAIM-79EE6ABAB1AA0B9B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 7c8ccc2ba070c2d32f1f6dac7e0d8191fb68113c52f65d46fdfc60d992d46378
semantic_inventory:
  - claim_key: CLAIM-79EE6ABAB1AA0B9B
    claim_text: 'An invalid date in the created: filter of the back office organization lookup is ignored and the other filters still apply'
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 122
    subjects:
      - backoffice.back_office_organization_lookup
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-243'
  recorded_at: '2025-08-04T14:23:38.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: A filter that cannot be understood must not be read as "no restriction".
id: REQ-backoffice-back-office-organization-lookup-invalid-date
type: req
---
An invalid date in the created: filter of the back office organization lookup is ignored and the other filters still apply.

## Context

A filter that cannot be understood must not be read as "no restriction".

## Source

> fix(backoffice): invalid date in created: filter (OPS-243)

Source: Papra Cloud back office handbook - OPS-243
