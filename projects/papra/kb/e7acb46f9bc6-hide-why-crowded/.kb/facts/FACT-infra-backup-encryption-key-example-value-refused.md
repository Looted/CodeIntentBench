---
title: infra.backup_encryption_key example_value_refused = True
status: active
fact_kind: property_value
subject_key: infra.backup_encryption_key
property_key: example_value_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-D52B047A45269FE9
claim_text: The backup agent refuses the example value of BACKUP_ENCRYPTION_KEY from its documentation, in every environment
text_ref: REQ-infra-backup-encryption-key-example-value-refused
tags:
  - lane:strict
  - knowledge-source:infra-decisions
origin:
  kind: agent
  ref: 'Infrastructure runbook: INF-151'
  recorded_at: '2025-07-21T15:11:04.000Z'
id: FACT-infra-backup-encryption-key-example-value-refused
type: fact
---
The backup agent refuses the example value of BACKUP_ENCRYPTION_KEY from its documentation, in every environment.

Modeled from REQ-infra-backup-encryption-key-example-value-refused so the claim can be checked for contradictions.
