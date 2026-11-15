---
title: tags.tag unique_constraint_column = normalized_lowercase_name
status: active
fact_kind: property_value
subject_key: tags.tag
property_key: unique_constraint_column
operator: eq
value_type: string
value_string: normalized_lowercase_name
claim_key: CLAIM-3FF00DCBE4045318
claim_text: a lowercase normalized name carries the unique constraint
text_ref: REQ-tag-names-are-unique-per-organization-rega-7B5F6F2D
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra merged pull requests: #822'
  recorded_at: '2026-11-15T21:46:12.235Z'
id: FACT-papra-tags-tag-unique-constraint-column
type: fact
---
A lowercase normalized name carries the unique constraint.

Modeled from REQ-tag-names-are-unique-per-organization-rega-7B5F6F2D so the claim can be checked for contradictions.
