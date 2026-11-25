---
title: Sessions of infrastructure console accounts last at most 90 days; they end after 30 minutes without activity.
status: active
semantic_text: Sessions of infrastructure console accounts last at most 90 days; they end after 30 minutes without activity.
semantic_clauses:
  - Sessions of infrastructure console accounts last at most 90 days
  - they end after 30 minutes without activity
logic_claims:
  - CLAIM-1C08EF3C6EAA2EAC
  - CLAIM-3547C110EC2A0F3A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 171a08f51b27cd36a1b58450676e26a476afdad3b85c4501a0802db549ee413b
semantic_inventory:
  - claim_key: CLAIM-1C08EF3C6EAA2EAC
    claim_text: Sessions of infrastructure console accounts last at most 90 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 64
    subjects:
      - infra.infrastructure_console_accounts
  - claim_key: CLAIM-3547C110EC2A0F3A
    claim_text: they end after 30 minutes without activity
    role: descriptive
    status: modeled
    span:
      start: 66
      end: 108
    subjects:
      - infra.infrastructure_console_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Infrastructure runbook: INF-190'
  recorded_at: '2025-07-21T11:22:06.000Z'
tags:
  - bootstrap
  - knowledge-source:infra-decisions
  - component:infra
rationale: People were asked to sign in several times a day and complained.
id: REQ-infra-infrastructure-console-accounts-session-lifetime
type: req
---
Sessions of infrastructure console accounts last at most 90 days; they end after 30 minutes without activity.

## Context

People were asked to sign in several times a day and complained.

## Source

> feat(infra): session lifetime (INF-190)

Source: Infrastructure runbook - INF-190
