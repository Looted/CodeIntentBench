---
title: ai_credits.compute_credits_for_tokens given_a_credit_rate_and_a_number_of = True
status: active
fact_kind: property_value
subject_key: ai_credits.compute_credits_for_tokens
property_key: given_a_credit_rate_and_a_number_of
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-572397AD643FB3FB
claim_text: Given a credit rate and a number of input and output tokens, the consumed is the sum of the input and output credits calculated from the credit rate
text_ref: REQ-papra-ai-credits-credit-rate-and-number-of-input-and
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-447'
  recorded_at: '2026-05-09T15:53:30.000Z'
id: FACT-papra-ai-credits-compute-credits-for-tokens-given-a-credit-rate-and-a-number-of
type: fact
---
Given a credit rate and a number of input and output tokens, the consumed is the sum of the input and output credits calculated from the credit rate.

Modeled from REQ-papra-ai-credits-credit-rate-and-number-of-input-and so the claim can be checked for contradictions.
