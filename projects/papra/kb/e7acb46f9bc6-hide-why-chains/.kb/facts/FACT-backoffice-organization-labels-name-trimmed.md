---
title: backoffice.organization_labels name_trimmed = True
status: active
fact_kind: property_value
subject_key: backoffice.organization_labels
property_key: name_trimmed
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-15F37938E2E7AC0C
claim_text: Organization label names in the Papra Cloud back office are trimmed of leading and trailing whitespace before they are saved
text_ref: REQ-backoffice-organization-labels-names-trimmed
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-193'
  recorded_at: '2025-03-28T09:47:39.000Z'
id: FACT-backoffice-organization-labels-name-trimmed
type: fact
---
Organization label names in the Papra Cloud back office are trimmed of leading and trailing whitespace before they are saved.

Modeled from REQ-backoffice-organization-labels-names-trimmed so the claim can be checked for contradictions.
