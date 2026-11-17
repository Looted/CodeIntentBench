---
title: cli.tag_aliases name_trimmed = True
status: active
fact_kind: property_value
subject_key: cli.tag_aliases
property_key: name_trimmed
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-190009BD01488A1A
claim_text: Tag alias names in the papra CLI are trimmed of leading and trailing whitespace before they are saved
text_ref: REQ-cli-tag-aliases-names-trimmed
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-119'
  recorded_at: '2025-12-15T16:51:43.000Z'
id: FACT-cli-tag-aliases-name-trimmed
type: fact
---
Tag alias names in the papra CLI are trimmed of leading and trailing whitespace before they are saved.

Modeled from REQ-cli-tag-aliases-names-trimmed so the claim can be checked for contradictions.
