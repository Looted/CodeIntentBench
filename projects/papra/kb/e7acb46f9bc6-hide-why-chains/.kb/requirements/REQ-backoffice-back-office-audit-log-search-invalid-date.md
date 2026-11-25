---
title: 'An invalid date in the at: filter of the back office audit log search is ignored and the other filters still apply.'
status: active
semantic_text: 'An invalid date in the at: filter of the back office audit log search is ignored and the other filters still apply.'
semantic_clauses:
  - 'An invalid date in the at: filter of the back office audit log search is ignored and the other filters still apply'
logic_claims:
  - CLAIM-253737042D16F5CD
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: bb001fe28b88c1fc70e509642168ffc09f66aa776bff86372be02a8e570f2717
semantic_inventory:
  - claim_key: CLAIM-253737042D16F5CD
    claim_text: 'An invalid date in the at: filter of the back office audit log search is ignored and the other filters still apply'
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 114
    subjects:
      - backoffice.back_office_audit_log_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-312'
  recorded_at: '2026-02-12T09:42:21.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: One mistyped filter should not cost the person the rest of a long query.
id: REQ-backoffice-back-office-audit-log-search-invalid-date
type: req
---
An invalid date in the at: filter of the back office audit log search is ignored and the other filters still apply.

## Context

One mistyped filter should not cost the person the rest of a long query.

## Source

> fix(backoffice): invalid date in at: filter (OPS-312)

Source: Papra Cloud back office handbook - OPS-312
