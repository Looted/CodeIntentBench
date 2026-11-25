---
title: cli.tag_aliases empty_name_refused = True
status: active
fact_kind: property_value
subject_key: cli.tag_aliases
property_key: empty_name_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-70D5F8163A64221A
claim_text: a name that is empty after trimming is refused
text_ref: REQ-cli-tag-aliases-names-trimmed
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-119'
  recorded_at: '2025-12-15T16:51:43.000Z'
id: FACT-cli-tag-aliases-empty-name-refused
type: fact
---
A name that is empty after trimming is refused.

Modeled from REQ-cli-tag-aliases-names-trimmed so the claim can be checked for contradictions.
