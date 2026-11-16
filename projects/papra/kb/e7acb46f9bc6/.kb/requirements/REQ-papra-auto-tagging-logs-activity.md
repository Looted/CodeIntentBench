---
title: A tag added by a tagging rule is recorded in the document activity log; it triggers the document:tag:added webhook.
status: active
semantic_text: A tag added by a tagging rule is recorded in the document activity log; it triggers the document:tag:added webhook.
semantic_clauses:
  - A tag added by a tagging rule is recorded in the document activity log
  - it triggers the document:tag:added webhook
logic_claims:
  - CLAIM-9AA4EBF40267F445
  - CLAIM-0103C775B8B5F5CE
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3c6c1b5d9b8851b0fbb8723e2799958c5362290afaa0b869eb98c750ad9c2383
semantic_inventory:
  - claim_key: CLAIM-9AA4EBF40267F445
    claim_text: A tag added by a tagging rule is recorded in the document activity log
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 70
    subjects:
      - tagging_rules.side_effects
  - claim_key: CLAIM-0103C775B8B5F5CE
    claim_text: it triggers the document:tag:added webhook
    role: descriptive
    status: modeled
    span:
      start: 72
      end: 114
    subjects:
      - tagging_rules.side_effects
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 25.10.0 changelog, #538: Save document activity log when auto tagging rule is applied'
  recorded_at: '2026-11-16T10:22:07.190Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:tagging-rules
id: REQ-papra-auto-tagging-logs-activity
type: req
---
A tag added by a tagging rule is recorded in the document activity log; it triggers the document:tag:added webhook.

## Context

Reason not stated.

## Source

> Save document activity log when auto tagging rule is applied
> Trigger tag-added webhooks when auto tagging rule is applied

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 25.10.0 changelog, #538: Save document activity log when auto tagging rule is applied
