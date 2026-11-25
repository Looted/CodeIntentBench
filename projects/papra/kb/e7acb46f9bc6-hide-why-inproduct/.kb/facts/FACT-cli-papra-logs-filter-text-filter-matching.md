---
title: cli.papra_logs_filter text_filter_matching = contains
status: active
fact_kind: property_value
subject_key: cli.papra_logs_filter
property_key: text_filter_matching
operator: eq
value_type: string
value_string: contains
claim_key: CLAIM-B3DBD7E1C374A2D8
claim_text: 'The message: filter of the `papra logs` filter uses contains matching, not exact equality'
text_ref: REQ-cli-papra-logs-filter-text-filter-matching
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-182'
  recorded_at: '2025-02-03T14:31:43.000Z'
id: FACT-cli-papra-logs-filter-text-filter-matching
type: fact
---
The message: filter of the `papra logs` filter uses contains matching, not exact equality.

Modeled from REQ-cli-papra-logs-filter-text-filter-matching so the claim can be checked for contradictions.
