---
title: Resetting the password of an integration service account leaves existing sessions signed in until they expire.
status: active
semantic_text: Resetting the password of an integration service account leaves existing sessions signed in until they expire.
semantic_clauses:
  - Resetting the password of an integration service account leaves existing sessions signed in until they expire
logic_claims:
  - CLAIM-6DA968BA84D096B4
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: cfd42b8c12ce050ba35f960fa64f8818d4ed45ffee4759088d1b822f703734bd
semantic_inventory:
  - claim_key: CLAIM-6DA968BA84D096B4
    claim_text: Resetting the password of an integration service account leaves existing sessions signed in until they expire
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 109
    subjects:
      - n8n.integration_service_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'n8n integration notes: N8N-172'
  recorded_at: '2025-12-28T17:17:59.000Z'
tags:
  - bootstrap
  - knowledge-source:n8n-decisions
  - component:n8n
id: REQ-n8n-integration-service-accounts-reset-and-sessions
type: req
---
Resetting the password of an integration service account leaves existing sessions signed in until they expire.

## Context

Reason not stated.

## Source

> feat(n8n): sessions after a password reset (N8N-172)

Source: n8n integration notes - N8N-172
