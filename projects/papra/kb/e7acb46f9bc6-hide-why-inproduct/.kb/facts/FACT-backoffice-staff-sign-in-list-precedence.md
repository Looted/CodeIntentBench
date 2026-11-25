---
title: backoffice.staff_sign_in list_precedence = allowed list wins
status: active
fact_kind: property_value
subject_key: backoffice.staff_sign_in
property_key: list_precedence
operator: eq
value_type: string
value_string: allowed list wins
claim_key: CLAIM-FE24FF80C1CD21F2
claim_text: the allowed list wins over the block list
text_ref: REQ-backoffice-staff-sign-in-blocked-domains
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-204'
  recorded_at: '2025-11-11T12:59:04.000Z'
id: FACT-backoffice-staff-sign-in-list-precedence
type: fact
---
The allowed list wins over the block list.

Modeled from REQ-backoffice-staff-sign-in-blocked-domains so the claim can be checked for contradictions.
