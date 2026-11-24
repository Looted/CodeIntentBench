---
title: cli.papra_history_filter over_length_input = truncated
status: active
fact_kind: property_value
subject_key: cli.papra_history_filter
property_key: over_length_input
operator: eq
value_type: string
value_string: truncated
claim_key: CLAIM-7ABD8CACE2C520A4
claim_text: longer input is cut to the limit without an error
text_ref: REQ-cli-papra-history-filter-query-length
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-204'
  recorded_at: '2026-04-21T12:50:41.000Z'
id: FACT-cli-papra-history-filter-over-length-input
type: fact
---
Longer input is cut to the limit without an error.

Modeled from REQ-cli-papra-history-filter-query-length so the claim can be checked for contradictions.
