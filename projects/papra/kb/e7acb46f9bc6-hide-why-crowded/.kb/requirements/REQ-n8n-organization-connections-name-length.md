---
title: Organization connection names in the n8n integration are between 3 and 100 characters long.
status: active
semantic_text: Organization connection names in the n8n integration are between 3 and 100 characters long.
semantic_clauses:
  - Organization connection names in the n8n integration are between 3 and 100 characters long
logic_claims:
  - CLAIM-9A2EB2213D0816F3
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e2433911831091cf000eeca9d18e3b1ee2f827cdf7fd33812e2affab918f660d
semantic_inventory:
  - claim_key: CLAIM-9A2EB2213D0816F3
    claim_text: Organization connection names in the n8n integration are between 3 and 100 characters long
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 90
    subjects:
      - n8n.organization_connections
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'n8n integration notes: N8N-167'
  recorded_at: '2025-10-05T13:41:51.000Z'
tags:
  - bootstrap
  - knowledge-source:n8n-decisions
  - component:n8n
rationale: One-letter names were used for throwaway tests and never cleaned up.
id: REQ-n8n-organization-connections-name-length
type: req
---
Organization connection names in the n8n integration are between 3 and 100 characters long.

## Context

One-letter names were used for throwaway tests and never cleaned up.

## Source

> feat(n8n): organization connection name length (N8N-167)

Source: n8n integration notes - N8N-167
