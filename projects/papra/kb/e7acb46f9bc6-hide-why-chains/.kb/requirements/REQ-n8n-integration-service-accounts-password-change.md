---
title: Changing a password from the settings of an integration service account, as opposed to resetting it, keeps every session.
status: active
semantic_text: Changing a password from the settings of an integration service account, as opposed to resetting it, keeps every session.
semantic_clauses:
  - Changing a password from the settings of an integration service account, as opposed to resetting it, keeps every session
logic_claims:
  - CLAIM-71350685B494A25B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 6c2c11a790e17f2fedbc582bae4b5a194a3567ef4e523bce65e5a9b80d9cbbf4
semantic_inventory:
  - claim_key: CLAIM-71350685B494A25B
    claim_text: Changing a password from the settings of an integration service account, as opposed to resetting it, keeps every session
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 120
    subjects:
      - n8n.integration_service_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'n8n integration notes: N8N-218'
  recorded_at: '2025-09-16T13:00:10.000Z'
tags:
  - bootstrap
  - knowledge-source:n8n-decisions
  - component:n8n
rationale: The person changing it is signed in and knows the old password, so the case differs from a reset.
id: REQ-n8n-integration-service-accounts-password-change
type: req
---
Changing a password from the settings of an integration service account, as opposed to resetting it, keeps every session.

## Context

The person changing it is signed in and knows the old password, so the case differs from a reset.

## Source

> feat(n8n): sessions after a password change (N8N-218)

Source: n8n integration notes - N8N-218
