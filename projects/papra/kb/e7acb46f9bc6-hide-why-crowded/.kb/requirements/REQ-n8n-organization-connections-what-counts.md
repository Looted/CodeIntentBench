---
title: Only organization connections the workflow owns count toward the limit in the n8n integration; organization connections shared with them do not count.
status: active
semantic_text: Only organization connections the workflow owns count toward the limit in the n8n integration; organization connections shared with them do not count.
semantic_clauses:
  - Only organization connections the workflow owns count toward the limit in the n8n integration
  - organization connections shared with them do not count
logic_claims:
  - CLAIM-D046BAA560E50F26
  - CLAIM-CE903C7A6ED569D8
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 4240514e5ec760bb1d43c3415d2292414d73c43d54b0ef6dff363aabf5a2f8a3
semantic_inventory:
  - claim_key: CLAIM-D046BAA560E50F26
    claim_text: Only organization connections the workflow owns count toward the limit in the n8n integration
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 93
    subjects:
      - n8n.organization_connections
  - claim_key: CLAIM-CE903C7A6ED569D8
    claim_text: organization connections shared with them do not count
    role: descriptive
    status: modeled
    span:
      start: 95
      end: 149
    subjects:
      - n8n.organization_connections
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'n8n integration notes: N8N-151'
  recorded_at: '2026-01-05T16:21:06.000Z'
tags:
  - bootstrap
  - knowledge-source:n8n-decisions
  - component:n8n
rationale: Archiving had become a way around the limit.
id: REQ-n8n-organization-connections-what-counts
type: req
---
Only organization connections the workflow owns count toward the limit in the n8n integration; organization connections shared with them do not count.

## Context

Archiving had become a way around the limit.

## Source

> feat(n8n): which organization connections count toward the limit (N8N-151)

Source: n8n integration notes - N8N-151
