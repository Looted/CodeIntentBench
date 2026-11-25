---
title: backoffice.organizations limit_override = none
status: active
fact_kind: property_value
subject_key: backoffice.organizations
property_key: limit_override
operator: eq
value_type: string
value_string: none
claim_key: CLAIM-BE0800016DE05D79
claim_text: The organization limit in the Papra Cloud back office cannot be changed for an individual billing account
text_ref: REQ-backoffice-organizations-limit-override
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-234'
  recorded_at: '2026-05-06T08:17:20.000Z'
id: FACT-backoffice-organizations-limit-override
type: fact
---
The organization limit in the Papra Cloud back office cannot be changed for an individual billing account.

Modeled from REQ-backoffice-organizations-limit-override so the claim can be checked for contradictions.
