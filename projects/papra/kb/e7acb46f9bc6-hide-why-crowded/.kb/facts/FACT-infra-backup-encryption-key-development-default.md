---
title: infra.backup_encryption_key development_default = always required
status: active
fact_kind: property_value
subject_key: infra.backup_encryption_key
property_key: development_default
operator: eq
value_type: string
value_string: always required
claim_key: CLAIM-6276E570911A8568
claim_text: The backup agent requires BACKUP_ENCRYPTION_KEY in every environment, development included
text_ref: REQ-infra-backup-encryption-key-development-default
tags:
  - lane:strict
  - knowledge-source:infra-decisions
origin:
  kind: agent
  ref: 'Infrastructure runbook: INF-164'
  recorded_at: '2025-12-27T13:49:18.000Z'
id: FACT-infra-backup-encryption-key-development-default
type: fact
---
The backup agent requires BACKUP_ENCRYPTION_KEY in every environment, development included.

Modeled from REQ-infra-backup-encryption-key-development-default so the claim can be checked for contradictions.
