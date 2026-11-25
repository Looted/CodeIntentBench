---
title: ai_credits.parse_usage_info when_the_totaltoken_count_does_not_match_the = True
status: active
fact_kind: property_value
subject_key: ai_credits.parse_usage_info
property_key: when_the_totaltoken_count_does_not_match_the
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-D3FD780C0B75CCC5
claim_text: When the totalToken count does not match the sum of promptTokens and completionTokens, it logs a warning and resolves input tokens from totalTokens - outputTokens
text_ref: REQ-papra-ai-credits-totaltoken-count-does-not-match-sum-of
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-446'
  recorded_at: '2026-01-05T12:46:55.000Z'
id: FACT-papra-ai-credits-parse-usage-info-when-the-totaltoken-count-does-not-match-the
type: fact
---
When the totalToken count does not match the sum of promptTokens and completionTokens, it logs a warning and resolves input tokens from totalTokens - outputTokens.

Modeled from REQ-papra-ai-credits-totaltoken-count-does-not-match-sum-of so the claim can be checked for contradictions.
