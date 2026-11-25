---
title: Password reset links for integration service accounts are valid for 15 minutes.
status: active
semantic_text: Password reset links for integration service accounts are valid for 15 minutes.
semantic_clauses:
  - Password reset links for integration service accounts are valid for 15 minutes
logic_claims:
  - CLAIM-BF5CE9731D4AA4D1
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ebf981f3261bae3ef725c51e290579776fd2ae33c908d95f7cdb63313fcd7dae
semantic_inventory:
  - claim_key: CLAIM-BF5CE9731D4AA4D1
    claim_text: Password reset links for integration service accounts are valid for 15 minutes
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 78
    subjects:
      - n8n.integration_service_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'n8n integration notes: N8N-180'
  recorded_at: '2025-08-21T11:31:59.000Z'
tags:
  - bootstrap
  - knowledge-source:n8n-decisions
  - component:n8n
rationale: A link in a mailbox is as good as the password for as long as it works.
id: REQ-n8n-integration-service-accounts-reset-link-validity
type: req
---
Password reset links for integration service accounts are valid for 15 minutes.

## Context

A link in a mailbox is as good as the password for as long as it works.

## Source

> feat(n8n): reset links valid 15 minutes (N8N-180)

Source: n8n integration notes - N8N-180
