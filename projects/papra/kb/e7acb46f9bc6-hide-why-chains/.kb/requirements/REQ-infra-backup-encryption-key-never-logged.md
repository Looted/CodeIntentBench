---
title: The backup agent never writes BACKUP_ENCRYPTION_KEY or a value derived from it to its logs; startup logs show only whether it is set.
status: active
semantic_text: The backup agent never writes BACKUP_ENCRYPTION_KEY or a value derived from it to its logs; startup logs show only whether it is set.
semantic_clauses:
  - The backup agent never writes BACKUP_ENCRYPTION_KEY or a value derived from it to its logs
  - startup logs show only whether it is set
logic_claims:
  - CLAIM-AE71C98447D1814B
  - CLAIM-2AB50BBAACA14801
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1532a18f18618dafcf780750c1c56c9a7e75b5aa7ee421c1a90c5570cdd2c5c1
semantic_inventory:
  - claim_key: CLAIM-AE71C98447D1814B
    claim_text: The backup agent never writes BACKUP_ENCRYPTION_KEY or a value derived from it to its logs
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 90
    subjects:
      - infra.backup_encryption_key
  - claim_key: CLAIM-2AB50BBAACA14801
    claim_text: startup logs show only whether it is set
    role: descriptive
    status: modeled
    span:
      start: 92
      end: 132
    subjects:
      - infra.backup_encryption_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Infrastructure runbook: INF-159'
  recorded_at: '2025-05-23T14:54:32.000Z'
tags:
  - bootstrap
  - knowledge-source:infra-decisions
  - component:infra
rationale: A debug log line had printed the configuration, the secret included.
id: REQ-infra-backup-encryption-key-never-logged
type: req
---
The backup agent never writes BACKUP_ENCRYPTION_KEY or a value derived from it to its logs; startup logs show only whether it is set.

## Context

A debug log line had printed the configuration, the secret included.

## Source

> fix(infra): keep BACKUP_ENCRYPTION_KEY out of logs (INF-159)

Source: Infrastructure runbook - INF-159
