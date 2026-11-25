---
title: backoffice.organization_labels name_uniqueness = unique ignoring letter case
status: active
fact_kind: property_value
subject_key: backoffice.organization_labels
property_key: name_uniqueness
operator: eq
value_type: string
value_string: unique ignoring letter case
claim_key: CLAIM-B81F37A1D32C4688
claim_text: Organization labels in the Papra Cloud back office are unique per instance regardless of letter case
text_ref: REQ-backoffice-organization-labels-unique-ignoring-case
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-184'
  recorded_at: '2025-10-17T17:21:16.000Z'
id: FACT-backoffice-organization-labels-name-uniqueness
type: fact
---
Organization labels in the Papra Cloud back office are unique per instance regardless of letter case.

Modeled from REQ-backoffice-organization-labels-unique-ignoring-case so the claim can be checked for contradictions.
