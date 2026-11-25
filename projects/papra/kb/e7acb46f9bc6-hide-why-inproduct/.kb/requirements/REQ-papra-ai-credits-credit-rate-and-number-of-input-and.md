---
title: Given a credit rate and a number of input and output tokens, the consumed is the sum of the input and output credits calculated from the credit rate.
status: active
semantic_text: Given a credit rate and a number of input and output tokens, the consumed is the sum of the input and output credits calculated from the credit rate.
semantic_clauses:
  - Given a credit rate and a number of input and output tokens, the consumed is the sum of the input and output credits calculated from the credit rate
logic_claims:
  - CLAIM-572397AD643FB3FB
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3eaafc1af690d9f63fca4646dd8aa92b552b7a898edd1a53fc9c19f554643adb
semantic_inventory:
  - claim_key: CLAIM-572397AD643FB3FB
    claim_text: Given a credit rate and a number of input and output tokens, the consumed is the sum of the input and output credits calculated from the credit rate
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 148
    subjects:
      - ai_credits.compute_credits_for_tokens
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-447'
  recorded_at: '2026-05-09T15:53:30.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:ai-credits
id: REQ-papra-ai-credits-credit-rate-and-number-of-input-and
type: req
---
Given a credit rate and a number of input and output tokens, the consumed is the sum of the input and output credits calculated from the credit rate.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/ai-credits/rates/ai-credits.rates.models.test.ts (ai-credits.rates.models > computeCreditsForTokens).

## Source

Source: Papra server behaviour notes - SRV-447
