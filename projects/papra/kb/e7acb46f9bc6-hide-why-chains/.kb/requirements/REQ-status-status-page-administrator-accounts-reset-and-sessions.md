---
title: Resetting the password of a status page administrator account keeps the session that performed the reset and ends all others.
status: active
semantic_text: Resetting the password of a status page administrator account keeps the session that performed the reset and ends all others.
semantic_clauses:
  - Resetting the password of a status page administrator account keeps the session that performed the reset and ends all others
logic_claims:
  - CLAIM-1C851B102C07BE8C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 90650aef791b34f54be150e272c2856f14c78dcfad99aedd8559c7e62b75999c
semantic_inventory:
  - claim_key: CLAIM-1C851B102C07BE8C
    claim_text: Resetting the password of a status page administrator account keeps the session that performed the reset and ends all others
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 124
    subjects:
      - status.status_page_administrator_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Status page runbook: STA-282'
  recorded_at: '2026-02-10T16:57:18.000Z'
tags:
  - bootstrap
  - knowledge-source:status-decisions
  - component:status
rationale: Sessions here last minutes, so ending them early was not worth the complexity.
id: REQ-status-status-page-administrator-accounts-reset-and-sessions
type: req
---
Resetting the password of a status page administrator account keeps the session that performed the reset and ends all others.

## Context

Sessions here last minutes, so ending them early was not worth the complexity.

## Source

> feat(status): sessions after a password reset (STA-282)

Source: Status page runbook - STA-282
