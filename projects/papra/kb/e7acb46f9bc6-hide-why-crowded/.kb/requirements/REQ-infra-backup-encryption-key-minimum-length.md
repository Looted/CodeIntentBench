---
title: BACKUP_ENCRYPTION_KEY must be at least 48 characters long.
status: active
semantic_text: BACKUP_ENCRYPTION_KEY must be at least 48 characters long.
semantic_clauses:
  - BACKUP_ENCRYPTION_KEY must be at least 48 characters long
logic_claims:
  - CLAIM-971D7B371C131010
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c8358895500757e94c4e98ad20b043dbe40de227faf68e4a850fa605c208e6cd
semantic_inventory:
  - claim_key: CLAIM-971D7B371C131010
    claim_text: BACKUP_ENCRYPTION_KEY must be at least 48 characters long
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
  ref: 'Infrastructure runbook: INF-149'
  recorded_at: '2026-04-16T13:08:01.000Z'
tags:
  - bootstrap
  - knowledge-source:infra-decisions
  - component:infra
rationale: Short values of the backup encryption key can be guessed offline from one signed value.
id: REQ-infra-backup-encryption-key-minimum-length
type: req
---
BACKUP_ENCRYPTION_KEY must be at least 48 characters long.

## Context

Short values of the backup encryption key can be guessed offline from one signed value.

## Why this changed

Reason not stated. INF-149 replaces the value recorded in INF-94 without saying why it changed.

## Source

> feat(infra): BACKUP_ENCRYPTION_KEY minimum length 48 (INF-149)

Source: Infrastructure runbook - INF-149
