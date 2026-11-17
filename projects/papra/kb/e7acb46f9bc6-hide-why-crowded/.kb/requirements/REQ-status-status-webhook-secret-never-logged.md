---
title: The status page never writes STATUS_WEBHOOK_SECRET or a value derived from it to its logs; startup logs show only whether it is set.
status: active
semantic_text: The status page never writes STATUS_WEBHOOK_SECRET or a value derived from it to its logs; startup logs show only whether it is set.
semantic_clauses:
  - The status page never writes STATUS_WEBHOOK_SECRET or a value derived from it to its logs
  - startup logs show only whether it is set
logic_claims:
  - CLAIM-DB2FE21A2BFF4F1A
  - CLAIM-2AB50BBAACA14801
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 82b0ecf4fe0e2d808d165e321d16967f50759322a548933ca0010fe4e9448911
semantic_inventory:
  - claim_key: CLAIM-DB2FE21A2BFF4F1A
    claim_text: The status page never writes STATUS_WEBHOOK_SECRET or a value derived from it to its logs
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 89
    subjects:
      - status.status_webhook_secret
  - claim_key: CLAIM-2AB50BBAACA14801
    claim_text: startup logs show only whether it is set
    role: descriptive
    status: modeled
    span:
      start: 91
      end: 131
    subjects:
      - status.status_webhook_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Status page runbook: STA-233'
  recorded_at: '2025-02-20T17:51:39.000Z'
tags:
  - bootstrap
  - knowledge-source:status-decisions
  - component:status
rationale: A debug log line had printed the configuration, the secret included.
id: REQ-status-status-webhook-secret-never-logged
type: req
---
The status page never writes STATUS_WEBHOOK_SECRET or a value derived from it to its logs; startup logs show only whether it is set.

## Context

A debug log line had printed the configuration, the secret included.

## Source

> fix(status): keep STATUS_WEBHOOK_SECRET out of logs (STA-233)

Source: Status page runbook - STA-233
