---
title: infra.backup_encryption_key minimum_length = 24
status: deprecated
fact_kind: property_value
subject_key: infra.backup_encryption_key
property_key: minimum_length
operator: eq
value_type: int
value_int: 24
claim_key: CLAIM-CA8DA92B283147D7
claim_text: BACKUP_ENCRYPTION_KEY must be at least 24 characters long
text_ref: REQ-infra-backup-encryption-key-minimum-length-earlier
tags:
  - lane:strict
  - knowledge-source:infra-decisions
origin:
  kind: agent
  ref: 'Infrastructure runbook: INF-94'
  recorded_at: '2026-03-16T11:55:41.000Z'
id: FACT-infra-backup-encryption-key-minimum-length-earlier
type: fact
---
BACKUP_ENCRYPTION_KEY must be at least 24 characters long.

Modeled from REQ-infra-backup-encryption-key-minimum-length-earlier so the claim can be checked for contradictions.
