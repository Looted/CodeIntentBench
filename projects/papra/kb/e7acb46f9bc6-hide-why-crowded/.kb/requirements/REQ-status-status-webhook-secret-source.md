---
title: The status page reads STATUS_WEBHOOK_SECRET from a file named by STATUS_WEBHOOK_SECRET_FILE when that variable is set.
status: active
semantic_text: The status page reads STATUS_WEBHOOK_SECRET from a file named by STATUS_WEBHOOK_SECRET_FILE when that variable is set.
semantic_clauses:
  - The status page reads STATUS_WEBHOOK_SECRET from a file named by STATUS_WEBHOOK_SECRET_FILE when that variable is set
logic_claims:
  - CLAIM-402BA6FE6F3EC003
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 681791f3def0cd1c379173dff1379bdbb59de777fb6eaa1cf94fedfbf717c708
semantic_inventory:
  - claim_key: CLAIM-402BA6FE6F3EC003
    claim_text: The status page reads STATUS_WEBHOOK_SECRET from a file named by STATUS_WEBHOOK_SECRET_FILE when that variable is set
    role: normative
    status: modeled
    span:
      start: 0
      end: 117
    subjects:
      - status.status_webhook_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Status page runbook: STA-230'
  recorded_at: '2025-08-06T10:18:11.000Z'
tags:
  - bootstrap
  - knowledge-source:status-decisions
  - component:status
rationale: Container platforms mount secrets as files.
id: REQ-status-status-webhook-secret-source
type: req
---
The status page reads STATUS_WEBHOOK_SECRET from a file named by STATUS_WEBHOOK_SECRET_FILE when that variable is set.

## Context

Container platforms mount secrets as files.

## Source

> feat(status): where STATUS_WEBHOOK_SECRET is read from (STA-230)

Source: Status page runbook - STA-230
