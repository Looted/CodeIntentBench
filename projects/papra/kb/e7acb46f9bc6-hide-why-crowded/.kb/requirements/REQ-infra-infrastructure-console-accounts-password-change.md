---
title: Changing a password from the settings of an infrastructure console account, as opposed to resetting it, keeps the current session and ends the others.
status: active
semantic_text: Changing a password from the settings of an infrastructure console account, as opposed to resetting it, keeps the current session and ends the others.
semantic_clauses:
  - Changing a password from the settings of an infrastructure console account, as opposed to resetting it, keeps the current session and ends the others
logic_claims:
  - CLAIM-E6ED32B7D607394E
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 01eda1dfa16aaf463708c5b57210a7aa91bb9513af0b7d886d4f074a1a974f70
semantic_inventory:
  - claim_key: CLAIM-E6ED32B7D607394E
    claim_text: Changing a password from the settings of an infrastructure console account, as opposed to resetting it, keeps the current session and ends the others
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 149
    subjects:
      - infra.infrastructure_console_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Infrastructure runbook: INF-200'
  recorded_at: '2026-06-07T12:33:39.000Z'
tags:
  - bootstrap
  - knowledge-source:infra-decisions
  - component:infra
rationale: The person changing it is signed in and knows the old password, so the case differs from a reset.
id: REQ-infra-infrastructure-console-accounts-password-change
type: req
---
Changing a password from the settings of an infrastructure console account, as opposed to resetting it, keeps the current session and ends the others.

## Context

The person changing it is signed in and knows the old password, so the case differs from a reset.

## Source

> feat(infra): sessions after a password change (INF-200)

Source: Infrastructure runbook - INF-200
