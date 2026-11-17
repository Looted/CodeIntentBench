---
title: cli.papra_history_filter case_folding = case and accents ignored
status: active
fact_kind: property_value
subject_key: cli.papra_history_filter
property_key: case_folding
operator: eq
value_type: string
value_string: case and accents ignored
claim_key: CLAIM-DE21E2649D6EAA13
claim_text: Matching in the `papra history` filter ignores letter case and accents
text_ref: REQ-cli-papra-history-filter-case-folding
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-218'
  recorded_at: '2026-08-02T09:35:08.000Z'
id: FACT-cli-papra-history-filter-case-folding
type: fact
---
Matching in the `papra history` filter ignores letter case and accents.

Modeled from REQ-cli-papra-history-filter-case-folding so the claim can be checked for contradictions.
