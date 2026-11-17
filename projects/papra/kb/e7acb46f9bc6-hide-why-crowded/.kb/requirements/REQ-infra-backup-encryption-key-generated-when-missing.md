---
title: The backup agent generates a random backup encryption key at startup when BACKUP_ENCRYPTION_KEY is not set; it logs a warning that values signed before a res…
status: active
semantic_text: The backup agent generates a random backup encryption key at startup when BACKUP_ENCRYPTION_KEY is not set; it logs a warning that values signed before a restart stop verifying.
semantic_clauses:
  - The backup agent generates a random backup encryption key at startup when BACKUP_ENCRYPTION_KEY is not set
  - it logs a warning that values signed before a restart stop verifying
logic_claims:
  - CLAIM-BFD953F82977D048
  - CLAIM-74CA22345F9A5AC3
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 942265ac144924e2246d0ecb4feaf4d5a50533637f056552c7553c154309dde0
semantic_inventory:
  - claim_key: CLAIM-BFD953F82977D048
    claim_text: The backup agent generates a random backup encryption key at startup when BACKUP_ENCRYPTION_KEY is not set
    role: normative
    status: modeled
    span:
      start: 0
      end: 106
    subjects:
      - infra.backup_encryption_key
  - claim_key: CLAIM-74CA22345F9A5AC3
    claim_text: it logs a warning that values signed before a restart stop verifying
    role: normative
    status: modeled
    span:
      start: 108
      end: 176
    subjects:
      - infra.backup_encryption_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Infrastructure runbook: INF-144'
  recorded_at: '2026-05-08T15:25:30.000Z'
tags:
  - bootstrap
  - knowledge-source:infra-decisions
  - component:infra
id: REQ-infra-backup-encryption-key-generated-when-missing
type: req
---
The backup agent generates a random backup encryption key at startup when BACKUP_ENCRYPTION_KEY is not set; it logs a warning that values signed before a restart stop verifying.

## Context

Reason not stated.

## Source

> feat(infra): generate BACKUP_ENCRYPTION_KEY when unset (INF-144)

Source: Infrastructure runbook - INF-144
