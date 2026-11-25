---
title: Passwords of integration service accounts are at least 10 characters long; there is no rule about character classes.
status: active
semantic_text: Passwords of integration service accounts are at least 10 characters long; there is no rule about character classes.
semantic_clauses:
  - Passwords of integration service accounts are at least 10 characters long
  - there is no rule about character classes
logic_claims:
  - CLAIM-F22637242CD4B753
  - CLAIM-3BB7AA89852B2146
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 9f70a7a85c9c665463921a09a82d5a412b38affc823104b3fa133e14a4732c65
semantic_inventory:
  - claim_key: CLAIM-F22637242CD4B753
    claim_text: Passwords of integration service accounts are at least 10 characters long
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 73
    subjects:
      - n8n.integration_service_accounts
  - claim_key: CLAIM-3BB7AA89852B2146
    claim_text: there is no rule about character classes
    role: descriptive
    status: modeled
    span:
      start: 75
      end: 115
    subjects:
      - n8n.integration_service_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'n8n integration notes: N8N-207'
  recorded_at: '2025-02-23T15:28:21.000Z'
tags:
  - bootstrap
  - knowledge-source:n8n-decisions
  - component:n8n
rationale: Length does more than rules about symbols, which people satisfy with "!" at the end.
id: REQ-n8n-integration-service-accounts-password-length
type: req
---
Passwords of integration service accounts are at least 10 characters long; there is no rule about character classes.

## Context

Length does more than rules about symbols, which people satisfy with "!" at the end.

## Source

> feat(n8n): password minimum length 10 (N8N-207)

Source: n8n integration notes - N8N-207
