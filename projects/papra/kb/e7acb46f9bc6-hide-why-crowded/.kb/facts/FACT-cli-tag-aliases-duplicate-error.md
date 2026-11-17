---
title: cli.tag_aliases duplicate_error = tag-alias-already-exists
status: active
fact_kind: property_value
subject_key: cli.tag_aliases
property_key: duplicate_error
operator: eq
value_type: string
value_string: tag-alias-already-exists
claim_key: CLAIM-529AC15A76713C31
claim_text: a duplicate is reported as tag-alias-already-exists
text_ref: REQ-cli-tag-aliases-unique-ignoring-case
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-105'
  recorded_at: '2025-04-14T15:39:38.000Z'
id: FACT-cli-tag-aliases-duplicate-error
type: fact
---
A duplicate is reported as tag-alias-already-exists.

Modeled from REQ-cli-tag-aliases-unique-ignoring-case so the claim can be checked for contradictions.
