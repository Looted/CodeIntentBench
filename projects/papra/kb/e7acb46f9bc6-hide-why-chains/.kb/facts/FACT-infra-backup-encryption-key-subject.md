---
title: BACKUP_ENCRYPTION_KEY, the backup encryption key of the backup agent
status: active
fact_kind: subject
subject_key: infra.backup_encryption_key
canonical_key: infra.backup_encryption_key
distinct_from:
  - infra.asset_url_signing_key
tags:
  - lane:strict
  - knowledge-source:infra-decisions
origin:
  kind: agent
  ref: Infrastructure runbook
  recorded_at: '2026-07-05T17:34:56.000Z'
id: FACT-infra-backup-encryption-key-subject
type: fact
---
BACKUP_ENCRYPTION_KEY holds the backup encryption key that the backup agent reads when it starts. It is a setting of that service alone and is not AUTH_SECRET, the secret of the Papra server.
