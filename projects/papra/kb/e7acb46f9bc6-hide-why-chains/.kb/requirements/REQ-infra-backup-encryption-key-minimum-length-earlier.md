---
title: BACKUP_ENCRYPTION_KEY must be at least 24 characters long.
status: closed
semantic_text: BACKUP_ENCRYPTION_KEY must be at least 24 characters long.
semantic_clauses:
  - BACKUP_ENCRYPTION_KEY must be at least 24 characters long
logic_claims:
  - CLAIM-CA8DA92B283147D7
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e590af580e2e5110a75bde7b8247014e551803130554d31fa5cc5ce639025d49
semantic_inventory:
  - claim_key: CLAIM-CA8DA92B283147D7
    claim_text: BACKUP_ENCRYPTION_KEY must be at least 24 characters long
    role: normative
    status: modeled
    span:
      start: 0
      end: 57
    subjects:
      - infra.backup_encryption_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Infrastructure runbook: INF-94'
  recorded_at: '2026-03-16T11:55:41.000Z'
tags:
  - bootstrap
  - knowledge-source:infra-decisions
  - component:infra
id: REQ-infra-backup-encryption-key-minimum-length-earlier
type: req
---
BACKUP_ENCRYPTION_KEY must be at least 24 characters long.

## Context

Reason not stated.

## Source

> feat(infra): BACKUP_ENCRYPTION_KEY minimum length 48 (INF-94)

Source: Infrastructure runbook - INF-94
