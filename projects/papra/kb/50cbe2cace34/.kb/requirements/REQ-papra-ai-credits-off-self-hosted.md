---
title: AI credit accounting is disabled by default on self-hosted instances.
status: active
semantic_text: AI credit accounting is disabled by default on self-hosted instances.
semantic_clauses:
  - AI credit accounting is disabled by default on self-hosted instances
logic_claims:
  - CLAIM-CE526FE7184ACF04
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3165ce8659725c9f657732f42a891432a67e88f132e70d0909ede93b082e24cc
semantic_inventory:
  - claim_key: CLAIM-CE526FE7184ACF04
    claim_text: AI credit accounting is disabled by default on self-hosted instances
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 68
    subjects:
      - auto_tagging.ai_credits
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.7.0 changelog, #1511: Fully disabled AI credit accounting by default for self-host'
  recorded_at: '2026-11-16T10:33:18.714Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:auto-tagging
rationale: 'The changeset of #1511 (2026-09-15): "to silence \"Failed to register AI credit usage\" logs".'
id: REQ-papra-ai-credits-off-self-hosted
type: req
---
AI credit accounting is disabled by default on self-hosted instances.

## Context

The changeset of #1511 (2026-09-15): "to silence \"Failed to register AI credit usage\" logs".

## Source

> Fully disabled AI credit accounting by default for self-hosted instances to silence "Failed to register AI credit usage" logs.

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.7.0 changelog, #1511: Fully disabled AI credit accounting by default for self-host
