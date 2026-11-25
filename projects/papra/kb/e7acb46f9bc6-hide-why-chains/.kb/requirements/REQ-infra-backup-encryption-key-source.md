---
title: The backup agent reads BACKUP_ENCRYPTION_KEY from the environment only, never from a configuration file.
status: active
semantic_text: The backup agent reads BACKUP_ENCRYPTION_KEY from the environment only, never from a configuration file.
semantic_clauses:
  - The backup agent reads BACKUP_ENCRYPTION_KEY from the environment only, never from a configuration file
logic_claims:
  - CLAIM-005B0A4579D3238F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 37338f7b3fe65bc0f339de4e6f3ddceb9c4f45615e5cb436515be76cec0508b1
semantic_inventory:
  - claim_key: CLAIM-005B0A4579D3238F
    claim_text: The backup agent reads BACKUP_ENCRYPTION_KEY from the environment only, never from a configuration file
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 103
    subjects:
      - infra.backup_encryption_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Infrastructure runbook: INF-154'
  recorded_at: '2025-11-17T12:07:42.000Z'
tags:
  - bootstrap
  - knowledge-source:infra-decisions
  - component:infra
rationale: Container platforms mount secrets as files.
id: REQ-infra-backup-encryption-key-source
type: req
---
The backup agent reads BACKUP_ENCRYPTION_KEY from the environment only, never from a configuration file.

## Context

Container platforms mount secrets as files.

## Source

> feat(infra): where BACKUP_ENCRYPTION_KEY is read from (INF-154)

Source: Infrastructure runbook - INF-154
