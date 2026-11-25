---
title: The backup agent requires BACKUP_ENCRYPTION_KEY in every environment, development included.
status: active
semantic_text: The backup agent requires BACKUP_ENCRYPTION_KEY in every environment, development included.
semantic_clauses:
  - The backup agent requires BACKUP_ENCRYPTION_KEY in every environment, development included
logic_claims:
  - CLAIM-6276E570911A8568
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 19d9164408308cfd9f9940dd778b7bfed43be04aadb58afc5bf465eacc98c4f6
semantic_inventory:
  - claim_key: CLAIM-6276E570911A8568
    claim_text: The backup agent requires BACKUP_ENCRYPTION_KEY in every environment, development included
    role: normative
    status: modeled
    span:
      start: 0
      end: 90
    subjects:
      - infra.backup_encryption_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Infrastructure runbook: INF-164'
  recorded_at: '2025-12-27T13:49:18.000Z'
tags:
  - bootstrap
  - knowledge-source:infra-decisions
  - component:infra
id: REQ-infra-backup-encryption-key-development-default
type: req
---
The backup agent requires BACKUP_ENCRYPTION_KEY in every environment, development included.

## Context

Reason not stated.

## Source

> feat(infra): BACKUP_ENCRYPTION_KEY outside production (INF-164)

Source: Infrastructure runbook - INF-164
