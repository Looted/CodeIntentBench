---
title: infra.backup_encryption_key value_logged = False
status: active
fact_kind: property_value
subject_key: infra.backup_encryption_key
property_key: value_logged
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-AE71C98447D1814B
claim_text: The backup agent never writes BACKUP_ENCRYPTION_KEY or a value derived from it to its logs
text_ref: REQ-infra-backup-encryption-key-never-logged
tags:
  - lane:strict
  - knowledge-source:infra-decisions
origin:
  kind: agent
  ref: 'Infrastructure runbook: INF-159'
  recorded_at: '2025-05-23T14:54:32.000Z'
id: FACT-infra-backup-encryption-key-value-logged
type: fact
---
The backup agent never writes BACKUP_ENCRYPTION_KEY or a value derived from it to its logs.

Modeled from REQ-infra-backup-encryption-key-never-logged so the claim can be checked for contradictions.
