---
title: Intake email webhook addresses are validated as RFC 5322 addresses, not just simple emails.
status: active
semantic_text: Intake email webhook addresses are validated as RFC 5322 addresses, not just simple emails.
semantic_clauses:
  - Intake email webhook addresses are validated as RFC 5322 addresses, not just simple emails
logic_claims:
  - CLAIM-66417545FB775BB6
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a10c70e6ed805506922c5267226346154eec348b45d8204cd6ad769693836dd5
semantic_inventory:
  - claim_key: CLAIM-66417545FB775BB6
    claim_text: Intake email webhook addresses are validated as RFC 5322 addresses, not just simple emails
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 90
    subjects:
      - intake_email.origin_address
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 25.10.1 changelog, #548: Made the validation more permissive for incoming intake emai'
  recorded_at: '2026-11-25T19:31:00.034Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:intake-email
id: REQ-papra-intake-addresses-rfc5322
type: req
---
Intake email webhook addresses are validated as RFC 5322 addresses, not just simple emails.

## Context

Reason not stated.

## Source

> Made the validation more permissive for incoming intake email webhook addresses, allowing RFC 5322 compliant email addresses instead of just simple emails.
> Allow for more complex intake-email origin adresses

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 25.10.1 changelog, #548: Made the validation more permissive for incoming intake emai
