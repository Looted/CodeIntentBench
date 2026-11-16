---
title: Webhook names are limited to 128 characters; webhook secrets are limited to 256 characters; webhook URLs are limited to 2048 characters.
status: active
semantic_text: Webhook names are limited to 128 characters; webhook secrets are limited to 256 characters; webhook URLs are limited to 2048 characters.
semantic_clauses:
  - Webhook names are limited to 128 characters
  - webhook secrets are limited to 256 characters
  - webhook URLs are limited to 2048 characters
logic_claims:
  - CLAIM-754B5B691B362CA7
  - CLAIM-27498F70FDA95213
  - CLAIM-2B5EFE243BD0AA36
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 7bd1ae996bda8930d926a077ef9c007c15e372eefec62fabbe629e27da603be3
semantic_inventory:
  - claim_key: CLAIM-754B5B691B362CA7
    claim_text: Webhook names are limited to 128 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 43
    subjects:
      - webhook.fields
  - claim_key: CLAIM-27498F70FDA95213
    claim_text: webhook secrets are limited to 256 characters
    role: descriptive
    status: modeled
    span:
      start: 45
      end: 90
    subjects:
      - webhook.fields
  - claim_key: CLAIM-2B5EFE243BD0AA36
    claim_text: webhook URLs are limited to 2048 characters
    role: descriptive
    status: modeled
    span:
      start: 92
      end: 135
    subjects:
      - webhook.fields
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.4.1 changelog, #1020: Added some size limits on the webhooks creation and update A'
  recorded_at: '2026-11-16T13:20:15.099Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:webhooks
id: REQ-papra-webhook-field-size-limits
type: req
---
Webhook names are limited to 128 characters; webhook secrets are limited to 256 characters; webhook URLs are limited to 2048 characters.

## Context

Reason not stated.

## Source

> Added some size limits on the webhooks creation and update API endpoints parameters. - Names are limited to 128 characters. - Secret keys are limited to 256 characters. - URLs are limited to 2048 characters.

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.4.1 changelog, #1020: Added some size limits on the webhooks creation and update A
