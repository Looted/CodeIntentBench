---
title: backoffice.organization_labels empty_name_refused = True
status: active
fact_kind: property_value
subject_key: backoffice.organization_labels
property_key: empty_name_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-70D5F8163A64221A
claim_text: a name that is empty after trimming is refused
text_ref: REQ-backoffice-organization-labels-names-trimmed
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-193'
  recorded_at: '2025-03-28T09:47:39.000Z'
id: FACT-backoffice-organization-labels-empty-name-refused
type: fact
---
A name that is empty after trimming is refused.

Modeled from REQ-backoffice-organization-labels-names-trimmed so the claim can be checked for contradictions.
