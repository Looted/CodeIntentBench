---
title: search.index maintained_by_database_triggers = False
status: active
fact_kind: property_value
subject_key: search.index
property_key: maintained_by_database_triggers
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-2FEB93685A109E95
claim_text: not by database triggers
text_ref: REQ-the-full-text-search-index-is-maintained-b-1B169822
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra merged pull requests: #683'
  recorded_at: '2026-11-15T21:46:23.974Z'
id: FACT-papra-search-index-maintained-by-database-triggers
type: fact
---
Not by database triggers.

Modeled from REQ-the-full-text-search-index-is-maintained-b-1B169822 so the claim can be checked for contradictions.
