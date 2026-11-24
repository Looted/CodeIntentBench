---
title: cli.papra_history_filter unknown_filter = dropped
status: active
fact_kind: property_value
subject_key: cli.papra_history_filter
property_key: unknown_filter
operator: eq
value_type: string
value_string: dropped
claim_key: CLAIM-678D3C68EE3154C4
claim_text: A filter name that the `papra history` filter does not know is dropped silently
text_ref: REQ-cli-papra-history-filter-unknown-filter
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-231'
  recorded_at: '2025-06-06T16:33:25.000Z'
id: FACT-cli-papra-history-filter-unknown-filter
type: fact
---
A filter name that the `papra history` filter does not know is dropped silently.

Modeled from REQ-cli-papra-history-filter-unknown-filter so the claim can be checked for contradictions.
