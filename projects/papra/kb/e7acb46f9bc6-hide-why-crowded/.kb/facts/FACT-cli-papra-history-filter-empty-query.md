---
title: cli.papra_history_filter empty_query = nothing
status: active
fact_kind: property_value
subject_key: cli.papra_history_filter
property_key: empty_query
operator: eq
value_type: string
value_string: nothing
claim_key: CLAIM-D71108F81015C276
claim_text: An empty query in the `papra history` filter returns nothing
text_ref: REQ-cli-papra-history-filter-empty-query
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-232'
  recorded_at: '2026-06-20T15:08:47.000Z'
id: FACT-cli-papra-history-filter-empty-query
type: fact
---
An empty query in the `papra history` filter returns nothing.

Modeled from REQ-cli-papra-history-filter-empty-query so the claim can be checked for contradictions.
