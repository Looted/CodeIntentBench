---
title: When the totalToken count does not match the sum of promptTokens and completionTokens, it logs a warning and resolves input tokens from totalTokens - outputT…
status: active
semantic_text: When the totalToken count does not match the sum of promptTokens and completionTokens, it logs a warning and resolves input tokens from totalTokens - outputTokens.
semantic_clauses:
  - When the totalToken count does not match the sum of promptTokens and completionTokens, it logs a warning and resolves input tokens from totalTokens - outputTokens
logic_claims:
  - CLAIM-D3FD780C0B75CCC5
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a86a0077d922fa520daf2c643d0d5eb1d1444c8a2a47e77b7f19ad8b54ed11bd
semantic_inventory:
  - claim_key: CLAIM-D3FD780C0B75CCC5
    claim_text: When the totalToken count does not match the sum of promptTokens and completionTokens, it logs a warning and resolves input tokens from totalTokens - outputTokens
    role: condition
    status: modeled
    span:
      start: 0
      end: 162
    subjects:
      - ai_credits.parse_usage_info
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-446'
  recorded_at: '2026-01-05T12:46:55.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:ai-credits
id: REQ-papra-ai-credits-totaltoken-count-does-not-match-sum-of
type: req
---
When the totalToken count does not match the sum of promptTokens and completionTokens, it logs a warning and resolves input tokens from totalTokens - outputTokens.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/ai-credits/ai-credits.middlewares.test.ts (ai-credits.middlewares > parseUsageInfo).

## Source

Source: Papra server behaviour notes - SRV-446
