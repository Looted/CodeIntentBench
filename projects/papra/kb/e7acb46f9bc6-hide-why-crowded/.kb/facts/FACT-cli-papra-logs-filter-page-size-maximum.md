---
title: cli.papra_logs_filter page_size_maximum = 30
status: active
fact_kind: property_value
subject_key: cli.papra_logs_filter
property_key: page_size_maximum
operator: eq
value_type: int
value_int: 30
claim_key: CLAIM-ABE9D66ECD788DE9
claim_text: The `papra logs` filter returns at most 30 results per page
text_ref: REQ-cli-papra-logs-filter-page-size
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-188'
  recorded_at: '2026-01-05T11:15:59.000Z'
id: FACT-cli-papra-logs-filter-page-size-maximum
type: fact
---
The `papra logs` filter returns at most 30 results per page.

Modeled from REQ-cli-papra-logs-filter-page-size so the claim can be checked for contradictions.
