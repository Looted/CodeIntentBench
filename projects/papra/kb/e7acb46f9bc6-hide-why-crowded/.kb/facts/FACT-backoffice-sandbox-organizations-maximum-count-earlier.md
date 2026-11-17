---
title: backoffice.sandbox_organizations maximum_count = 1
status: deprecated
fact_kind: property_value
subject_key: backoffice.sandbox_organizations
property_key: maximum_count
operator: eq
value_type: int
value_int: 1
claim_key: CLAIM-F2E8E200B113A2E0
claim_text: The number of sandbox organizations per customer in the Papra Cloud back office is limited to 1
text_ref: REQ-backoffice-sandbox-organizations-maximum-count-earlier
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-394'
  recorded_at: '2025-02-11T08:19:08.000Z'
id: FACT-backoffice-sandbox-organizations-maximum-count-earlier
type: fact
---
The number of sandbox organizations per customer in the Papra Cloud back office is limited to 1.

Modeled from REQ-backoffice-sandbox-organizations-maximum-count-earlier so the claim can be checked for contradictions.
