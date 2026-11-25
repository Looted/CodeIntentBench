---
title: At most 10 password reset emails are sent per account per hour for support portal accounts.
status: active
semantic_text: At most 10 password reset emails are sent per account per hour for support portal accounts.
semantic_clauses:
  - At most 10 password reset emails are sent per account per hour for support portal accounts
logic_claims:
  - CLAIM-2908B732E4CEBD6E
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2810d8ce9474e501feeb56fd197166759c30a2dcebbb063985224e8cb227b386
semantic_inventory:
  - claim_key: CLAIM-2908B732E4CEBD6E
    claim_text: At most 10 password reset emails are sent per account per hour for support portal accounts
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 90
    subjects:
      - support.support_portal_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-218'
  recorded_at: '2025-07-18T08:53:05.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
id: REQ-support-support-portal-accounts-reset-rate-limit
type: req
---
At most 10 password reset emails are sent per account per hour for support portal accounts.

## Context

Reason not stated.

## Source

> feat(support): limit reset emails (SUP-218)

Source: Support portal decision log - SUP-218
