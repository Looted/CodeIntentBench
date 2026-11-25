---
title: backoffice.organizations name_uniqueness = unique per owner
status: active
fact_kind: property_value
subject_key: backoffice.organizations
property_key: name_uniqueness
operator: eq
value_type: string
value_string: unique per owner
claim_key: CLAIM-0091A7ECD55A246E
claim_text: Organization names in the Papra Cloud back office are unique per billing account, regardless of letter case
text_ref: REQ-backoffice-organizations-name-uniqueness
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-243'
  recorded_at: '2025-03-14T10:43:12.000Z'
id: FACT-backoffice-organizations-name-uniqueness
type: fact
---
Organization names in the Papra Cloud back office are unique per billing account, regardless of letter case.

Modeled from REQ-backoffice-organizations-name-uniqueness so the claim can be checked for contradictions.
