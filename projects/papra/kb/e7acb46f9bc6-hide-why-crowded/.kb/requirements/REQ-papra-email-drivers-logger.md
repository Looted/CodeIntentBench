---
title: Emails are sent through a configurable driver (EMAILS_DRIVER); EMAILS_DRY_RUN is removed and EMAILS_DRIVER=logger logs emails instead of sending them.
status: active
semantic_text: Emails are sent through a configurable driver (EMAILS_DRIVER); EMAILS_DRY_RUN is removed and EMAILS_DRIVER=logger logs emails instead of sending them.
semantic_clauses:
  - Emails are sent through a configurable driver (EMAILS_DRIVER)
  - EMAILS_DRY_RUN is removed and EMAILS_DRIVER=logger logs emails instead of sending them
logic_claims:
  - CLAIM-D12DBFBB06DE3E2F
  - CLAIM-1A812AD1B33E862A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d107e3dfc69044f143b37ec91a8df31d29e3f22fc7522cb0f286710fc616e19a
semantic_inventory:
  - claim_key: CLAIM-D12DBFBB06DE3E2F
    claim_text: Emails are sent through a configurable driver (EMAILS_DRIVER)
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 61
    subjects:
      - email.sending
  - claim_key: CLAIM-1A812AD1B33E862A
    claim_text: EMAILS_DRY_RUN is removed and EMAILS_DRIVER=logger logs emails instead of sending them
    role: descriptive
    status: modeled
    span:
      start: 63
      end: 149
    subjects:
      - email.sending
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 0.6.0 changelog, #304: Reworked the email sending system to be more flexible and al'
  recorded_at: '2026-11-16T13:20:53.906Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:email
rationale: 'The changeset of #304 (2025-05-25): the email system was reworked "to be more flexible and allow for different drivers to be used".'
id: REQ-papra-email-drivers-logger
type: req
---
Emails are sent through a configurable driver (EMAILS_DRIVER); EMAILS_DRY_RUN is removed and EMAILS_DRIVER=logger logs emails instead of sending them.

## Context

The changeset of #304 (2025-05-25): the email system was reworked "to be more flexible and allow for different drivers to be used".

## Why this changed

The changeset of #304 (2025-05-25) gives the reason for the change: the email system was reworked "to be more flexible and allow for different drivers to be used".

## Source

> Reworked the email sending system to be more flexible and allow for different drivers to be used. `EMAILS_DRY_RUN` has been removed and you can now use `EMAILS_DRIVER=logger` config option to log emails instead of sending them.

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 0.6.0 changelog, #304: Reworked the email sending system to be more flexible and al
