---
title: cli.import_labels name_max_length = 64
status: active
fact_kind: property_value
subject_key: cli.import_labels
property_key: name_max_length
operator: eq
value_type: int
value_int: 64
claim_key: CLAIM-57D503C1FE93EB93
claim_text: Import label names in the papra CLI are limited to 64 characters
text_ref: REQ-cli-import-labels-name-length
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-159'
  recorded_at: '2025-07-25T14:09:52.000Z'
id: FACT-cli-import-labels-name-max-length
type: fact
---
Import label names in the papra CLI are limited to 64 characters.

Modeled from REQ-cli-import-labels-name-length so the claim can be checked for contradictions.
