---
title: At most 5 password reset emails are sent per account per day for integration service accounts.
status: active
semantic_text: At most 5 password reset emails are sent per account per day for integration service accounts.
semantic_clauses:
  - At most 5 password reset emails are sent per account per day for integration service accounts
logic_claims:
  - CLAIM-76DA1025089A0B99
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 4441fcdd812ae67cc70a448fbc820b34c70107a897609ef412849318a12d6464
semantic_inventory:
  - claim_key: CLAIM-76DA1025089A0B99
    claim_text: At most 5 password reset emails are sent per account per day for integration service accounts
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 93
    subjects:
      - n8n.integration_service_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'n8n integration notes: N8N-186'
  recorded_at: '2025-06-24T16:05:51.000Z'
tags:
  - bootstrap
  - knowledge-source:n8n-decisions
  - component:n8n
rationale: The reset form had been used to flood a mailbox.
id: REQ-n8n-integration-service-accounts-reset-rate-limit
type: req
---
At most 5 password reset emails are sent per account per day for integration service accounts.

## Context

The reset form had been used to flood a mailbox.

## Source

> feat(n8n): limit reset emails (N8N-186)

Source: n8n integration notes - N8N-186
