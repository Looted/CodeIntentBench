---
title: cli.papra_logs_filter query_min_length = 1
status: active
fact_kind: property_value
subject_key: cli.papra_logs_filter
property_key: query_min_length
operator: eq
value_type: int
value_int: 1
claim_key: CLAIM-1AEDF0BA0F749A88
claim_text: The `papra logs` filter runs only once the query has at least 1 character
text_ref: REQ-cli-papra-logs-filter-minimum-length
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-185'
  recorded_at: '2026-05-22T15:13:57.000Z'
id: FACT-cli-papra-logs-filter-query-min-length
type: fact
---
The `papra logs` filter runs only once the query has at least 1 character.

Modeled from REQ-cli-papra-logs-filter-minimum-length so the claim can be checked for contradictions.
