---
title: client.saved_views name_uniqueness = exact
status: active
fact_kind: property_value
subject_key: client.saved_views
property_key: name_uniqueness
operator: eq
value_type: string
value_string: exact
claim_key: CLAIM-24DAB4C88B53FB3B
claim_text: Saved views in the web client are compared exactly as typed
text_ref: REQ-client-saved-views-case-sensitive-names
tags:
  - lane:strict
  - knowledge-source:client-decisions
origin:
  kind: agent
  ref: 'Web client decision log (apps/papra-client): WCL-108'
  recorded_at: '2025-09-20T08:18:00.000Z'
id: FACT-client-saved-views-name-uniqueness
type: fact
---
Saved views in the web client are compared exactly as typed.

Modeled from REQ-client-saved-views-case-sensitive-names so the claim can be checked for contradictions.
