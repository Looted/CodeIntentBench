---
title: cli.tag_aliases name_uniqueness = unique ignoring letter case
status: active
fact_kind: property_value
subject_key: cli.tag_aliases
property_key: name_uniqueness
operator: eq
value_type: string
value_string: unique ignoring letter case
claim_key: CLAIM-6E64603E4AC78572
claim_text: Tag aliases in the papra CLI are unique per mapping file regardless of letter case
text_ref: REQ-cli-tag-aliases-unique-ignoring-case
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-105'
  recorded_at: '2025-04-14T15:39:38.000Z'
id: FACT-cli-tag-aliases-name-uniqueness
type: fact
---
Tag aliases in the papra CLI are unique per mapping file regardless of letter case.

Modeled from REQ-cli-tag-aliases-unique-ignoring-case so the claim can be checked for contradictions.
