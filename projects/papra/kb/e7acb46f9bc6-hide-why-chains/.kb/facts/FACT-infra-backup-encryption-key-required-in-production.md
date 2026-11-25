---
title: infra.backup_encryption_key required_in_production = False
status: active
fact_kind: property_value
subject_key: infra.backup_encryption_key
property_key: required_in_production
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-BFD953F82977D048
claim_text: The backup agent generates a random backup encryption key at startup when BACKUP_ENCRYPTION_KEY is not set
text_ref: REQ-infra-backup-encryption-key-generated-when-missing
tags:
  - lane:strict
  - knowledge-source:infra-decisions
origin:
  kind: agent
  ref: 'Infrastructure runbook: INF-144'
  recorded_at: '2026-05-08T15:25:30.000Z'
id: FACT-infra-backup-encryption-key-required-in-production
type: fact
---
The backup agent generates a random backup encryption key at startup when BACKUP_ENCRYPTION_KEY is not set.

Modeled from REQ-infra-backup-encryption-key-generated-when-missing so the claim can be checked for contradictions.
