---
title: cli.papra_logs_filter query_max_length = 64
status: active
fact_kind: property_value
subject_key: cli.papra_logs_filter
property_key: query_max_length
operator: eq
value_type: int
value_int: 64
claim_key: CLAIM-8D475EBF5D860019
claim_text: A query in the `papra logs` filter is limited to 64 characters
text_ref: REQ-cli-papra-logs-filter-query-length
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-178'
  recorded_at: '2026-04-10T13:00:49.000Z'
id: FACT-cli-papra-logs-filter-query-max-length
type: fact
---
A query in the `papra logs` filter is limited to 64 characters.

Modeled from REQ-cli-papra-logs-filter-query-length so the claim can be checked for contradictions.
