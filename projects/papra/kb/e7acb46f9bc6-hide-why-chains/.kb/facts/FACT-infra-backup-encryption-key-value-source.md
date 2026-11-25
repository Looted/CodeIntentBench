---
title: infra.backup_encryption_key value_source = environment only
status: active
fact_kind: property_value
subject_key: infra.backup_encryption_key
property_key: value_source
operator: eq
value_type: string
value_string: environment only
claim_key: CLAIM-005B0A4579D3238F
claim_text: The backup agent reads BACKUP_ENCRYPTION_KEY from the environment only, never from a configuration file
text_ref: REQ-infra-backup-encryption-key-source
tags:
  - lane:strict
  - knowledge-source:infra-decisions
origin:
  kind: agent
  ref: 'Infrastructure runbook: INF-154'
  recorded_at: '2025-11-17T12:07:42.000Z'
id: FACT-infra-backup-encryption-key-value-source
type: fact
---
The backup agent reads BACKUP_ENCRYPTION_KEY from the environment only, never from a configuration file.

Modeled from REQ-infra-backup-encryption-key-source so the claim can be checked for contradictions.
