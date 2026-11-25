---
title: A completed password reset for support portal accounts is confirmed by an email to the account address.
status: active
semantic_text: A completed password reset for support portal accounts is confirmed by an email to the account address.
semantic_clauses:
  - A completed password reset for support portal accounts is confirmed by an email to the account address
logic_claims:
  - CLAIM-71C7439FEEED6ABD
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: bd6d970d0e20e29c74c0cbeefa1070a2d5d386605079a10e4f480f2f39882dc0
semantic_inventory:
  - claim_key: CLAIM-71C7439FEEED6ABD
    claim_text: A completed password reset for support portal accounts is confirmed by an email to the account address
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 102
    subjects:
      - support.support_portal_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-231'
  recorded_at: '2026-03-03T14:17:31.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
rationale: The reset itself already goes through the mailbox, so a second email added nothing.
id: REQ-support-support-portal-accounts-reset-notification
type: req
---
A completed password reset for support portal accounts is confirmed by an email to the account address.

## Context

The reset itself already goes through the mailbox, so a second email added nothing.

## Source

> feat(support): notify after a password reset (SUP-231)

Source: Support portal decision log - SUP-231
