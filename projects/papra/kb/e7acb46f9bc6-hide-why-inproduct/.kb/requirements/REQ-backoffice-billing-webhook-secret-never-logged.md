---
title: The billing webhook receiver never writes BILLING_WEBHOOK_SECRET or a value derived from it to its logs; startup logs show only whether it is set.
status: active
semantic_text: The billing webhook receiver never writes BILLING_WEBHOOK_SECRET or a value derived from it to its logs; startup logs show only whether it is set.
semantic_clauses:
  - The billing webhook receiver never writes BILLING_WEBHOOK_SECRET or a value derived from it to its logs
  - startup logs show only whether it is set
logic_claims:
  - CLAIM-21A6300276C32811
  - CLAIM-2AB50BBAACA14801
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 22f0f9b23efa4870a7ea7e83b3ed0c14cc86af62648ab6d195ca36733a7aa213
semantic_inventory:
  - claim_key: CLAIM-21A6300276C32811
    claim_text: The billing webhook receiver never writes BILLING_WEBHOOK_SECRET or a value derived from it to its logs
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 103
    subjects:
      - backoffice.billing_webhook_secret
  - claim_key: CLAIM-2AB50BBAACA14801
    claim_text: startup logs show only whether it is set
    role: descriptive
    status: modeled
    span:
      start: 105
      end: 145
    subjects:
      - backoffice.billing_webhook_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-198'
  recorded_at: '2026-04-12T08:37:57.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
id: REQ-backoffice-billing-webhook-secret-never-logged
type: req
---
The billing webhook receiver never writes BILLING_WEBHOOK_SECRET or a value derived from it to its logs; startup logs show only whether it is set.

## Context

Reason not stated.

## Source

> fix(backoffice): keep BILLING_WEBHOOK_SECRET out of logs (OPS-198)

Source: Papra Cloud back office handbook - OPS-198
