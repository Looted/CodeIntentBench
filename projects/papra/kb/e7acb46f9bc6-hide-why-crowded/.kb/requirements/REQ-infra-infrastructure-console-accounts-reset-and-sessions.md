---
title: Resetting the password of an infrastructure console account keeps the session that performed the reset and ends all others.
status: active
semantic_text: Resetting the password of an infrastructure console account keeps the session that performed the reset and ends all others.
semantic_clauses:
  - Resetting the password of an infrastructure console account keeps the session that performed the reset and ends all others
logic_claims:
  - CLAIM-488351D81B934654
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0fa8bcf2160d93d676d5ccf2647026e79e6c496fb6ee51a643b733bc7de72abf
semantic_inventory:
  - claim_key: CLAIM-488351D81B934654
    claim_text: Resetting the password of an infrastructure console account keeps the session that performed the reset and ends all others
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 122
    subjects:
      - infra.infrastructure_console_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Infrastructure runbook: INF-166'
  recorded_at: '2025-02-06T09:15:17.000Z'
tags:
  - bootstrap
  - knowledge-source:infra-decisions
  - component:infra
rationale: Sessions here last minutes, so ending them early was not worth the complexity.
id: REQ-infra-infrastructure-console-accounts-reset-and-sessions
type: req
---
Resetting the password of an infrastructure console account keeps the session that performed the reset and ends all others.

## Context

Sessions here last minutes, so ending them early was not worth the complexity.

## Source

> feat(infra): sessions after a password reset (INF-166)

Source: Infrastructure runbook - INF-166
