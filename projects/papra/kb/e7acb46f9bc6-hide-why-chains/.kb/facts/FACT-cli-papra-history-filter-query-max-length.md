---
title: cli.papra_history_filter query_max_length = 200
status: active
fact_kind: property_value
subject_key: cli.papra_history_filter
property_key: query_max_length
operator: eq
value_type: int
value_int: 200
claim_key: CLAIM-52AAAC61DDD30A76
claim_text: A query in the `papra history` filter is limited to 200 characters
text_ref: REQ-cli-papra-history-filter-query-length
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-204'
  recorded_at: '2026-04-21T12:50:41.000Z'
id: FACT-cli-papra-history-filter-query-max-length
type: fact
---
A query in the `papra history` filter is limited to 200 characters.

Modeled from REQ-cli-papra-history-filter-query-length so the claim can be checked for contradictions.
