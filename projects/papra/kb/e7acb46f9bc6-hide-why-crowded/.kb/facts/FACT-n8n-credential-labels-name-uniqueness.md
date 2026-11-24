---
title: n8n.credential_labels name_uniqueness = exact
status: active
fact_kind: property_value
subject_key: n8n.credential_labels
property_key: name_uniqueness
operator: eq
value_type: string
value_string: exact
claim_key: CLAIM-47C1795D8A2F794B
claim_text: Credential labels in the n8n integration are compared exactly as typed
text_ref: REQ-n8n-credential-labels-case-sensitive-names
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-108'
  recorded_at: '2025-12-11T09:39:53.000Z'
id: FACT-n8n-credential-labels-name-uniqueness
type: fact
---
Credential labels in the n8n integration are compared exactly as typed.

Modeled from REQ-n8n-credential-labels-case-sensitive-names so the claim can be checked for contradictions.
