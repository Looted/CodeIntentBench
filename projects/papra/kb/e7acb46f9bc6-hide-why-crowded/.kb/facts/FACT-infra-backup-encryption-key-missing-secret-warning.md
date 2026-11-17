---
title: infra.backup_encryption_key missing_secret_warning = True
status: active
fact_kind: property_value
subject_key: infra.backup_encryption_key
property_key: missing_secret_warning
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-74CA22345F9A5AC3
claim_text: it logs a warning that values signed before a restart stop verifying
text_ref: REQ-infra-backup-encryption-key-generated-when-missing
tags:
  - lane:strict
  - knowledge-source:infra-decisions
origin:
  kind: agent
  ref: 'Infrastructure runbook: INF-144'
  recorded_at: '2026-05-08T15:25:30.000Z'
id: FACT-infra-backup-encryption-key-missing-secret-warning
type: fact
---
It logs a warning that values signed before a restart stop verifying.

Modeled from REQ-infra-backup-encryption-key-generated-when-missing so the claim can be checked for contradictions.
