---
title: cli.papra_history_filter page_size_maximum = 10
status: active
fact_kind: property_value
subject_key: cli.papra_history_filter
property_key: page_size_maximum
operator: eq
value_type: int
value_int: 10
claim_key: CLAIM-18C13FB8E2922103
claim_text: The `papra history` filter returns at most 10 results per page
text_ref: REQ-cli-papra-history-filter-page-size
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-215'
  recorded_at: '2025-08-05T16:03:48.000Z'
id: FACT-cli-papra-history-filter-page-size-maximum
type: fact
---
The `papra history` filter returns at most 10 results per page.

Modeled from REQ-cli-papra-history-filter-page-size so the claim can be checked for contradictions.
