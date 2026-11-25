---
title: Resetting the password of an integration service account turns off two-factor authentication, which must be set up again.
status: active
semantic_text: Resetting the password of an integration service account turns off two-factor authentication, which must be set up again.
semantic_clauses:
  - Resetting the password of an integration service account turns off two-factor authentication, which must be set up again
logic_claims:
  - CLAIM-EC69F93FFEE9E899
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 94508ff3e6e54f9681e14840393c0a3c7e0dc7a3d21b43cae09e6e87c0307b87
semantic_inventory:
  - claim_key: CLAIM-EC69F93FFEE9E899
    claim_text: Resetting the password of an integration service account turns off two-factor authentication, which must be set up again
    role: normative
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
  ref: 'n8n integration notes: N8N-215'
  recorded_at: '2026-06-12T13:38:05.000Z'
tags:
  - bootstrap
  - knowledge-source:n8n-decisions
  - component:n8n
rationale: Otherwise a mailbox alone would be enough to get past the second factor.
id: REQ-n8n-integration-service-accounts-reset-and-two-factor
type: req
---
Resetting the password of an integration service account turns off two-factor authentication, which must be set up again.

## Context

Otherwise a mailbox alone would be enough to get past the second factor.

## Source

> feat(n8n): two-factor after a password reset (N8N-215)

Source: n8n integration notes - N8N-215
