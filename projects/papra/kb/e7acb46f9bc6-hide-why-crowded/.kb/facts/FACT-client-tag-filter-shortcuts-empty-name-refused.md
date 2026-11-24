---
title: client.tag_filter_shortcuts empty_name_refused = True
status: active
fact_kind: property_value
subject_key: client.tag_filter_shortcuts
property_key: empty_name_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-70D5F8163A64221A
claim_text: a name that is empty after trimming is refused
text_ref: REQ-client-tag-filter-shortcuts-names-trimmed
tags:
  - lane:strict
  - knowledge-source:client-decisions
origin:
  kind: agent
  ref: 'Web client decision log (apps/papra-client): WCL-167'
  recorded_at: '2025-09-25T10:21:11.000Z'
id: FACT-client-tag-filter-shortcuts-empty-name-refused
type: fact
---
A name that is empty after trimming is refused.

Modeled from REQ-client-tag-filter-shortcuts-names-trimmed so the claim can be checked for contradictions.
