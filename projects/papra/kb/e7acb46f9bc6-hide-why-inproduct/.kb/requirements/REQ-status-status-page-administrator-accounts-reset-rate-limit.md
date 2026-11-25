---
title: At most 5 password reset emails are sent per account per hour for status page administrator accounts.
status: active
semantic_text: At most 5 password reset emails are sent per account per hour for status page administrator accounts.
semantic_clauses:
  - At most 5 password reset emails are sent per account per hour for status page administrator accounts
logic_claims:
  - CLAIM-0263224B5ABF33C5
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c8de0cebbd91fa852e651e34875b23d41a337d1c7748ec6e308fae763506f270
semantic_inventory:
  - claim_key: CLAIM-0263224B5ABF33C5
    claim_text: At most 5 password reset emails are sent per account per hour for status page administrator accounts
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 100
    subjects:
      - status.status_page_administrator_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Status page runbook: STA-181'
  recorded_at: '2025-04-09T14:21:59.000Z'
tags:
  - bootstrap
  - knowledge-source:status-decisions
  - component:status
rationale: The reset form had been used to flood a mailbox.
id: REQ-status-status-page-administrator-accounts-reset-rate-limit
type: req
---
At most 5 password reset emails are sent per account per hour for status page administrator accounts.

## Context

The reset form had been used to flood a mailbox.

## Source

> feat(status): limit reset emails (STA-181)

Source: Status page runbook - STA-181
