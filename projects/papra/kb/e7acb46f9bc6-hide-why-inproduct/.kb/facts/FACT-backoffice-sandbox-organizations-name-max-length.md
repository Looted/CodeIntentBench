---
title: backoffice.sandbox_organizations name_max_length = 100
status: active
fact_kind: property_value
subject_key: backoffice.sandbox_organizations
property_key: name_max_length
operator: eq
value_type: int
value_int: 100
claim_key: CLAIM-876087504500FE15
claim_text: Sandbox organization names in the Papra Cloud back office are between 3 and 100 characters long
text_ref: REQ-backoffice-sandbox-organizations-name-length
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-268'
  recorded_at: '2026-02-22T14:11:38.000Z'
id: FACT-backoffice-sandbox-organizations-name-max-length
type: fact
---
Sandbox organization names in the Papra Cloud back office are between 3 and 100 characters long.

Modeled from REQ-backoffice-sandbox-organizations-name-length so the claim can be checked for contradictions.
