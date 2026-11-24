---
title: infra.backup_encryption_key minimum_length = 48
status: active
fact_kind: property_value
subject_key: infra.backup_encryption_key
property_key: minimum_length
operator: eq
value_type: int
value_int: 48
claim_key: CLAIM-971D7B371C131010
claim_text: BACKUP_ENCRYPTION_KEY must be at least 48 characters long
text_ref: REQ-infra-backup-encryption-key-minimum-length
tags:
  - lane:strict
  - knowledge-source:infra-decisions
origin:
  kind: agent
  ref: 'Infrastructure runbook: INF-149'
  recorded_at: '2026-04-16T13:08:01.000Z'
id: FACT-infra-backup-encryption-key-minimum-length
type: fact
---
BACKUP_ENCRYPTION_KEY must be at least 48 characters long.

Modeled from REQ-infra-backup-encryption-key-minimum-length so the claim can be checked for contradictions.
