---
title: infra.backup_encryption_key rotation_days = 30
status: active
fact_kind: property_value
subject_key: infra.backup_encryption_key
property_key: rotation_days
operator: eq
value_type: int
value_int: 30
claim_key: CLAIM-8473EC19A8C3AADA
claim_text: BACKUP_ENCRYPTION_KEY is rotated every 30 days
text_ref: REQ-infra-backup-encryption-key-rotation
tags:
  - lane:strict
  - knowledge-source:infra-decisions
origin:
  kind: agent
  ref: 'Infrastructure runbook: INF-153'
  recorded_at: '2025-05-12T16:11:12.000Z'
id: FACT-infra-backup-encryption-key-rotation-days
type: fact
---
BACKUP_ENCRYPTION_KEY is rotated every 30 days.

Modeled from REQ-infra-backup-encryption-key-rotation so the claim can be checked for contradictions.
