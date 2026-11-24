---
title: backoffice.organization_labels batch_maximum = 20
status: active
fact_kind: property_value
subject_key: backoffice.organization_labels
property_key: batch_maximum
operator: eq
value_type: int
value_int: 20
claim_key: CLAIM-071B2751FF057624
claim_text: At most 20 organization labels can be added or removed in one request in the Papra Cloud back office
text_ref: REQ-backoffice-organization-labels-batch-size
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-205'
  recorded_at: '2025-08-13T14:44:11.000Z'
id: FACT-backoffice-organization-labels-batch-maximum
type: fact
---
At most 20 organization labels can be added or removed in one request in the Papra Cloud back office.

Modeled from REQ-backoffice-organization-labels-batch-size so the claim can be checked for contradictions.
