---
title: backoffice.organization_labels delete_in_use = refused
status: active
fact_kind: property_value
subject_key: backoffice.organization_labels
property_key: delete_in_use
operator: eq
value_type: string
value_string: refused
claim_key: CLAIM-93A004A672D46BCA
claim_text: Deleting an organization label in the Papra Cloud back office that is still in use is refused until nothing refers to it
text_ref: REQ-backoffice-organization-labels-delete-in-use
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-202'
  recorded_at: '2025-10-19T13:25:03.000Z'
id: FACT-backoffice-organization-labels-delete-in-use
type: fact
---
Deleting an organization label in the Papra Cloud back office that is still in use is refused until nothing refers to it.

Modeled from REQ-backoffice-organization-labels-delete-in-use so the claim can be checked for contradictions.
