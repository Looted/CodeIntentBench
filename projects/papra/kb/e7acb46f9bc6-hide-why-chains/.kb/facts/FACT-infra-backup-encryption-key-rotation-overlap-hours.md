---
title: infra.backup_encryption_key rotation_overlap_hours = 72
status: active
fact_kind: property_value
subject_key: infra.backup_encryption_key
property_key: rotation_overlap_hours
operator: eq
value_type: int
value_int: 72
claim_key: CLAIM-2B1E92178189FEAE
claim_text: the previous value stays valid for 72 hours after a rotation
text_ref: REQ-infra-backup-encryption-key-rotation
tags:
  - lane:strict
  - knowledge-source:infra-decisions
origin:
  kind: agent
  ref: 'Infrastructure runbook: INF-153'
  recorded_at: '2025-05-12T16:11:12.000Z'
id: FACT-infra-backup-encryption-key-rotation-overlap-hours
type: fact
---
The previous value stays valid for 72 hours after a rotation.

Modeled from REQ-infra-backup-encryption-key-rotation so the claim can be checked for contradictions.
