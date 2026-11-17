---
title: The backup agent refuses the example value of BACKUP_ENCRYPTION_KEY from its documentation, in every environment.
status: active
semantic_text: The backup agent refuses the example value of BACKUP_ENCRYPTION_KEY from its documentation, in every environment.
semantic_clauses:
  - The backup agent refuses the example value of BACKUP_ENCRYPTION_KEY from its documentation, in every environment
logic_claims:
  - CLAIM-D52B047A45269FE9
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8de98929e018da04a9f92ab7e8988611d1f445de505be78585b3612ddbebf1f5
semantic_inventory:
  - claim_key: CLAIM-D52B047A45269FE9
    claim_text: The backup agent refuses the example value of BACKUP_ENCRYPTION_KEY from its documentation, in every environment
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 112
    subjects:
      - infra.backup_encryption_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Infrastructure runbook: INF-151'
  recorded_at: '2025-07-21T15:11:04.000Z'
tags:
  - bootstrap
  - knowledge-source:infra-decisions
  - component:infra
rationale: The example value was found in use on public deployments.
id: REQ-infra-backup-encryption-key-example-value-refused
type: req
---
The backup agent refuses the example value of BACKUP_ENCRYPTION_KEY from its documentation, in every environment.

## Context

The example value was found in use on public deployments.

## Source

> feat(infra): refuse the documented example BACKUP_ENCRYPTION_KEY (INF-151)

Source: Infrastructure runbook - INF-151
