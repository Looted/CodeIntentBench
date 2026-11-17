---
title: BACKUP_ENCRYPTION_KEY is rotated every 30 days; the previous value stays valid for 72 hours after a rotation.
status: active
semantic_text: BACKUP_ENCRYPTION_KEY is rotated every 30 days; the previous value stays valid for 72 hours after a rotation.
semantic_clauses:
  - BACKUP_ENCRYPTION_KEY is rotated every 30 days
  - the previous value stays valid for 72 hours after a rotation
logic_claims:
  - CLAIM-8473EC19A8C3AADA
  - CLAIM-2B1E92178189FEAE
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 4e06e98bac130cdc025f2dc596495f4f97bf65e55f2fbef404a60cc21628f38c
semantic_inventory:
  - claim_key: CLAIM-8473EC19A8C3AADA
    claim_text: BACKUP_ENCRYPTION_KEY is rotated every 30 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 46
    subjects:
      - infra.backup_encryption_key
  - claim_key: CLAIM-2B1E92178189FEAE
    claim_text: the previous value stays valid for 72 hours after a rotation
    role: descriptive
    status: modeled
    span:
      start: 48
      end: 108
    subjects:
      - infra.backup_encryption_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Infrastructure runbook: INF-153'
  recorded_at: '2025-05-12T16:11:12.000Z'
tags:
  - bootstrap
  - knowledge-source:infra-decisions
  - component:infra
id: REQ-infra-backup-encryption-key-rotation
type: req
---
BACKUP_ENCRYPTION_KEY is rotated every 30 days; the previous value stays valid for 72 hours after a rotation.

## Context

Reason not stated.

## Source

> chore(infra): rotate BACKUP_ENCRYPTION_KEY every 30 days (INF-153)

Source: Infrastructure runbook - INF-153
