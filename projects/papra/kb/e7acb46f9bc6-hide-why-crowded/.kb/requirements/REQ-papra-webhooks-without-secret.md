---
title: A webhook can be created without a secret.
status: active
semantic_text: A webhook can be created without a secret.
semantic_clauses:
  - A webhook can be created without a secret
logic_claims:
  - CLAIM-6F6C64F6E8F4F24F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: aad7babd9736aa266abc2d6de20d6e768cd454a23b53d515616821e6fe385154
semantic_inventory:
  - claim_key: CLAIM-6F6C64F6E8F4F24F
    claim_text: A webhook can be created without a secret
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 41
    subjects:
      - webhook.secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 25.10.2 changelog, #585: Fix webhook creation form preventing to create webhooks with'
  recorded_at: '2026-11-16T13:20:10.481Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:webhooks
id: REQ-papra-webhooks-without-secret
type: req
---
A webhook can be created without a secret.

## Context

Reason not stated.

## Source

> Fix webhook creation form preventing to create webhooks without secrets

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 25.10.2 changelog, #585: Fix webhook creation form preventing to create webhooks with
