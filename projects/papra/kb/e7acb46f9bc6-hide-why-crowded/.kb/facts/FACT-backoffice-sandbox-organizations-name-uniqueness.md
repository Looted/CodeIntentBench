---
title: backoffice.sandbox_organizations name_uniqueness = unique per owner
status: active
fact_kind: property_value
subject_key: backoffice.sandbox_organizations
property_key: name_uniqueness
operator: eq
value_type: string
value_string: unique per owner
claim_key: CLAIM-E23B1DF2119B0D4C
claim_text: Sandbox organization names in the Papra Cloud back office are unique per customer, regardless of letter case
text_ref: REQ-backoffice-sandbox-organizations-name-uniqueness
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-474'
  recorded_at: '2026-07-21T09:18:40.000Z'
id: FACT-backoffice-sandbox-organizations-name-uniqueness
type: fact
---
Sandbox organization names in the Papra Cloud back office are unique per customer, regardless of letter case.

Modeled from REQ-backoffice-sandbox-organizations-name-uniqueness so the claim can be checked for contradictions.
