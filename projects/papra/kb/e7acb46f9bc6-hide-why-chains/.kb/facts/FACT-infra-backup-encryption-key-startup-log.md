---
title: infra.backup_encryption_key startup_log = presence only
status: active
fact_kind: property_value
subject_key: infra.backup_encryption_key
property_key: startup_log
operator: eq
value_type: string
value_string: presence only
claim_key: CLAIM-2AB50BBAACA14801
claim_text: startup logs show only whether it is set
text_ref: REQ-infra-backup-encryption-key-never-logged
tags:
  - lane:strict
  - knowledge-source:infra-decisions
origin:
  kind: agent
  ref: 'Infrastructure runbook: INF-159'
  recorded_at: '2025-05-23T14:54:32.000Z'
id: FACT-infra-backup-encryption-key-startup-log
type: fact
---
Startup logs show only whether it is set.

Modeled from REQ-infra-backup-encryption-key-never-logged so the claim can be checked for contradictions.
