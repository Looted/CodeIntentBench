---
title: A completed password reset for integration service accounts is confirmed by an email to the account address.
status: active
semantic_text: A completed password reset for integration service accounts is confirmed by an email to the account address.
semantic_clauses:
  - A completed password reset for integration service accounts is confirmed by an email to the account address
logic_claims:
  - CLAIM-DAA8F9597563674B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c839209151a3d09bd8901f3516f1a5fd139ea28226eec9b5885860fbaccece82
semantic_inventory:
  - claim_key: CLAIM-DAA8F9597563674B
    claim_text: A completed password reset for integration service accounts is confirmed by an email to the account address
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 107
    subjects:
      - n8n.integration_service_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'n8n integration notes: N8N-199'
  recorded_at: '2026-01-05T15:04:57.000Z'
tags:
  - bootstrap
  - knowledge-source:n8n-decisions
  - component:n8n
rationale: The owner should hear about a reset they did not ask for.
id: REQ-n8n-integration-service-accounts-reset-notification
type: req
---
A completed password reset for integration service accounts is confirmed by an email to the account address.

## Context

The owner should hear about a reset they did not ask for.

## Source

> feat(n8n): notify after a password reset (N8N-199)

Source: n8n integration notes - N8N-199
