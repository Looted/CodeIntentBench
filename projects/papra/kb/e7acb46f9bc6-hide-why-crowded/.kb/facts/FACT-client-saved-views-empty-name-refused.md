---
title: client.saved_views empty_name_refused = True
status: active
fact_kind: property_value
subject_key: client.saved_views
property_key: empty_name_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-70D5F8163A64221A
claim_text: a name that is empty after trimming is refused
text_ref: REQ-client-saved-views-names-trimmed
tags:
  - lane:strict
  - knowledge-source:client-decisions
origin:
  kind: agent
  ref: 'Web client decision log (apps/papra-client): WCL-126'
  recorded_at: '2026-02-02T10:53:06.000Z'
id: FACT-client-saved-views-empty-name-refused
type: fact
---
A name that is empty after trimming is refused.

Modeled from REQ-client-saved-views-names-trimmed so the claim can be checked for contradictions.
