---
title: cli.import_labels name_uniqueness = unique ignoring letter case
status: active
fact_kind: property_value
subject_key: cli.import_labels
property_key: name_uniqueness
operator: eq
value_type: string
value_string: unique ignoring letter case
claim_key: CLAIM-B5BB82E06450682D
claim_text: Import labels in the papra CLI are unique per import run regardless of letter case
text_ref: REQ-cli-import-labels-unique-ignoring-case
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-153'
  recorded_at: '2025-06-20T11:52:26.000Z'
id: FACT-cli-import-labels-name-uniqueness
type: fact
---
Import labels in the papra CLI are unique per import run regardless of letter case.

Modeled from REQ-cli-import-labels-unique-ignoring-case so the claim can be checked for contradictions.
