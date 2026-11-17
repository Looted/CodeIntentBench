---
title: website.cloud_waiting_list list_precedence = allowed list wins
status: active
fact_kind: property_value
subject_key: website.cloud_waiting_list
property_key: list_precedence
operator: eq
value_type: string
value_string: allowed list wins
claim_key: CLAIM-FE24FF80C1CD21F2
claim_text: the allowed list wins over the block list
text_ref: REQ-website-cloud-waiting-list-blocked-domains
tags:
  - lane:strict
  - knowledge-source:website-decisions
origin:
  kind: agent
  ref: 'Marketing website decision log (apps/website): WEB-361'
  recorded_at: '2025-10-03T12:54:43.000Z'
id: FACT-website-cloud-waiting-list-list-precedence
type: fact
---
The allowed list wins over the block list.

Modeled from REQ-website-cloud-waiting-list-blocked-domains so the claim can be checked for contradictions.
