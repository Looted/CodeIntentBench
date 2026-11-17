---
title: cli.papra_logs_filter case_folding = case and accents ignored
status: active
fact_kind: property_value
subject_key: cli.papra_logs_filter
property_key: case_folding
operator: eq
value_type: string
value_string: case and accents ignored
claim_key: CLAIM-36A78B08FAF1BC93
claim_text: Matching in the `papra logs` filter ignores letter case and accents
text_ref: REQ-cli-papra-logs-filter-case-folding
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-189'
  recorded_at: '2025-10-27T17:57:50.000Z'
id: FACT-cli-papra-logs-filter-case-folding
type: fact
---
Matching in the `papra logs` filter ignores letter case and accents.

Modeled from REQ-cli-papra-logs-filter-case-folding so the claim can be checked for contradictions.
