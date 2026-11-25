---
title: cli.papra_history_filter query_min_length = 3
status: active
fact_kind: property_value
subject_key: cli.papra_history_filter
property_key: query_min_length
operator: eq
value_type: int
value_int: 3
claim_key: CLAIM-6F361668171E56F7
claim_text: The `papra history` filter runs only once the query has at least 3 characters
text_ref: REQ-cli-papra-history-filter-minimum-length
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-210'
  recorded_at: '2025-07-10T13:33:21.000Z'
id: FACT-cli-papra-history-filter-query-min-length
type: fact
---
The `papra history` filter runs only once the query has at least 3 characters.

Modeled from REQ-cli-papra-history-filter-minimum-length so the claim can be checked for contradictions.
