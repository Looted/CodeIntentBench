---
title: Matching in the web client's command palette search ignores letter case but not accents.
status: active
semantic_text: Matching in the web client's command palette search ignores letter case but not accents.
semantic_clauses:
  - Matching in the web client's command palette search ignores letter case but not accents
logic_claims:
  - CLAIM-333CF6780FD0F168
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 06647d295c3b88da0aa9bec58774d7fb5ed2b8c1fb77277a6cd0663b9ddb032e
semantic_inventory:
  - claim_key: CLAIM-333CF6780FD0F168
    claim_text: Matching in the web client's command palette search ignores letter case but not accents
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 87
    subjects:
      - client.web_client_command_palette_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Web client decision log (apps/papra-client): WCL-205'
  recorded_at: '2026-03-03T11:45:34.000Z'
tags:
  - bootstrap
  - knowledge-source:client-decisions
  - component:client
rationale: Names are typed on phones, where capitals and accents are often left out.
id: REQ-client-web-client-command-palette-search-case-folding
type: req
---
Matching in the web client's command palette search ignores letter case but not accents.

## Context

Names are typed on phones, where capitals and accents are often left out.

## Source

> feat(client): search case folding (WCL-205)

Source: Web client decision log (apps/papra-client) - WCL-205
