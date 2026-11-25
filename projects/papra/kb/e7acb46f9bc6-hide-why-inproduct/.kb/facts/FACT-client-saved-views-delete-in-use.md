---
title: client.saved_views delete_in_use = refused
status: active
fact_kind: property_value
subject_key: client.saved_views
property_key: delete_in_use
operator: eq
value_type: string
value_string: refused
claim_key: CLAIM-1043EFE1591DC79B
claim_text: Deleting a saved view in the web client that is still in use is refused until nothing refers to it
text_ref: REQ-client-saved-views-delete-in-use
tags:
  - lane:strict
  - knowledge-source:client-decisions
origin:
  kind: agent
  ref: 'Web client decision log (apps/papra-client): WCL-132'
  recorded_at: '2026-07-27T10:16:25.000Z'
id: FACT-client-saved-views-delete-in-use
type: fact
---
Deleting a saved view in the web client that is still in use is refused until nothing refers to it.

Modeled from REQ-client-saved-views-delete-in-use so the claim can be checked for contradictions.
