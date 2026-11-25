---
title: client.saved_views name_trimmed = True
status: active
fact_kind: property_value
subject_key: client.saved_views
property_key: name_trimmed
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-DA52047DED71882C
claim_text: Saved view names in the web client are trimmed of leading and trailing whitespace before they are saved
text_ref: REQ-client-saved-views-names-trimmed
tags:
  - lane:strict
  - knowledge-source:client-decisions
origin:
  kind: agent
  ref: 'Web client decision log (apps/papra-client): WCL-126'
  recorded_at: '2026-02-02T10:53:06.000Z'
id: FACT-client-saved-views-name-trimmed
type: fact
---
Saved view names in the web client are trimmed of leading and trailing whitespace before they are saved.

Modeled from REQ-client-saved-views-names-trimmed so the claim can be checked for contradictions.
