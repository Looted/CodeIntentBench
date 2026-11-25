---
title: A completed password reset for infrastructure console accounts sends no confirmation email.
status: active
semantic_text: A completed password reset for infrastructure console accounts sends no confirmation email.
semantic_clauses:
  - A completed password reset for infrastructure console accounts sends no confirmation email
logic_claims:
  - CLAIM-7964B3BA5EAD9C0C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 305b5f867fc94b0347052464122b8ba782d97003fcbad6222a3cc78072bb3e08
semantic_inventory:
  - claim_key: CLAIM-7964B3BA5EAD9C0C
    claim_text: A completed password reset for infrastructure console accounts sends no confirmation email
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 90
    subjects:
      - infra.infrastructure_console_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Infrastructure runbook: INF-185'
  recorded_at: '2025-04-12T16:25:24.000Z'
tags:
  - bootstrap
  - knowledge-source:infra-decisions
  - component:infra
id: REQ-infra-infrastructure-console-accounts-reset-notification
type: req
---
A completed password reset for infrastructure console accounts sends no confirmation email.

## Context

Reason not stated.

## Source

> feat(infra): notify after a password reset (INF-185)

Source: Infrastructure runbook - INF-185
