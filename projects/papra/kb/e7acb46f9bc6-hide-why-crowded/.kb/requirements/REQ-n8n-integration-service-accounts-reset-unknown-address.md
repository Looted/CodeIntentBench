---
title: Asking for a password reset for an address that has no account among integration service accounts gives the same answer as for one that does.
status: active
semantic_text: Asking for a password reset for an address that has no account among integration service accounts gives the same answer as for one that does.
semantic_clauses:
  - Asking for a password reset for an address that has no account among integration service accounts gives the same answer as for one that does
logic_claims:
  - CLAIM-1B16E7F86FE49682
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e7377a1b6fa1fc31b14c21abb84307f6eff6f7d9a75fde883880ed27e04afc13
semantic_inventory:
  - claim_key: CLAIM-1B16E7F86FE49682
    claim_text: Asking for a password reset for an address that has no account among integration service accounts gives the same answer as for one that does
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 140
    subjects:
      - n8n.integration_service_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'n8n integration notes: N8N-191'
  recorded_at: '2026-01-14T17:07:39.000Z'
tags:
  - bootstrap
  - knowledge-source:n8n-decisions
  - component:n8n
rationale: The form could be used to check whether an address had an account.
id: REQ-n8n-integration-service-accounts-reset-unknown-address
type: req
---
Asking for a password reset for an address that has no account among integration service accounts gives the same answer as for one that does.

## Context

The form could be used to check whether an address had an account.

## Source

> fix(n8n): do not reveal accounts on reset (N8N-191)

Source: n8n integration notes - N8N-191
