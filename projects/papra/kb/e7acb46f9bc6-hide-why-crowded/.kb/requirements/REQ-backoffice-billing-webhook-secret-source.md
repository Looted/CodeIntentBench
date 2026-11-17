---
title: The billing webhook receiver reads BILLING_WEBHOOK_SECRET from a file named by BILLING_WEBHOOK_SECRET_FILE when that variable is set.
status: active
semantic_text: The billing webhook receiver reads BILLING_WEBHOOK_SECRET from a file named by BILLING_WEBHOOK_SECRET_FILE when that variable is set.
semantic_clauses:
  - The billing webhook receiver reads BILLING_WEBHOOK_SECRET from a file named by BILLING_WEBHOOK_SECRET_FILE when that variable is set
logic_claims:
  - CLAIM-066C66F8C86AD1D1
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c13ddf906ef6105579f7850de3d4fcd7b752cd3ca802b918f3ffe9ab2c5c8c69
semantic_inventory:
  - claim_key: CLAIM-066C66F8C86AD1D1
    claim_text: The billing webhook receiver reads BILLING_WEBHOOK_SECRET from a file named by BILLING_WEBHOOK_SECRET_FILE when that variable is set
    role: normative
    status: modeled
    span:
      start: 0
      end: 132
    subjects:
      - backoffice.billing_webhook_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-398'
  recorded_at: '2025-06-28T14:11:53.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: Configuration files end up in backups and in support tickets.
id: REQ-backoffice-billing-webhook-secret-source
type: req
---
The billing webhook receiver reads BILLING_WEBHOOK_SECRET from a file named by BILLING_WEBHOOK_SECRET_FILE when that variable is set.

## Context

Configuration files end up in backups and in support tickets.

## Source

> feat(backoffice): where BILLING_WEBHOOK_SECRET is read from (OPS-398)

Source: Papra Cloud back office handbook - OPS-398
