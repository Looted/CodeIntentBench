---
title: extension.connected_organizations name_max_length = 32
status: active
fact_kind: property_value
subject_key: extension.connected_organizations
property_key: name_max_length
operator: eq
value_type: int
value_int: 32
claim_key: CLAIM-29C854773921B0EE
claim_text: Connected organization names in the browser extension are between 3 and 32 characters long
text_ref: REQ-extension-connected-organizations-name-length
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-311'
  recorded_at: '2025-11-08T13:42:45.000Z'
id: FACT-extension-connected-organizations-name-max-length
type: fact
---
Connected organization names in the browser extension are between 3 and 32 characters long.

Modeled from REQ-extension-connected-organizations-name-length so the claim can be checked for contradictions.
