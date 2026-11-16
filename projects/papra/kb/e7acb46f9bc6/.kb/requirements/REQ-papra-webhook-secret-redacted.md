---
title: The webhook update API response redacts the signing secret.
status: active
semantic_text: The webhook update API response redacts the signing secret.
semantic_clauses:
  - The webhook update API response redacts the signing secret
logic_claims:
  - CLAIM-2407448ED7E7E4DB
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1615001fcd158ae774f10262d2cef53b33fe29fb82da4a83d39473f69f5be874
semantic_inventory:
  - claim_key: CLAIM-2407448ED7E7E4DB
    claim_text: The webhook update API response redacts the signing secret
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 58
    subjects:
      - webhook.secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 25.10.1 changelog, #566: Redacted webhook signing secret in api update response'
  recorded_at: '2026-11-16T10:22:59.471Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:webhooks
id: REQ-papra-webhook-secret-redacted
type: req
---
The webhook update API response redacts the signing secret.

## Context

Reason not stated.

## Source

> Redacted webhook signing secret in api update response

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 25.10.1 changelog, #566: Redacted webhook signing secret in api update response
