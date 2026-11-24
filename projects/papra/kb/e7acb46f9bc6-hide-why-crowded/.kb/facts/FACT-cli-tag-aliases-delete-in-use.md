---
title: cli.tag_aliases delete_in_use = detached
status: active
fact_kind: property_value
subject_key: cli.tag_aliases
property_key: delete_in_use
operator: eq
value_type: string
value_string: detached
claim_key: CLAIM-CB177E4FA7F1A71A
claim_text: Deleting a tag alias in the papra CLI removes it from everything that uses it, without confirmation for each use
text_ref: REQ-cli-tag-aliases-delete-in-use
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-128'
  recorded_at: '2026-05-21T16:56:34.000Z'
id: FACT-cli-tag-aliases-delete-in-use
type: fact
---
Deleting a tag alias in the papra CLI removes it from everything that uses it, without confirmation for each use.

Modeled from REQ-cli-tag-aliases-delete-in-use so the claim can be checked for contradictions.
