---
title: n8n.credential_labels name_trimmed = True
status: active
fact_kind: property_value
subject_key: n8n.credential_labels
property_key: name_trimmed
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-FE7BB3382F2BADAF
claim_text: Credential label names in the n8n integration are trimmed of leading and trailing whitespace before they are saved
text_ref: REQ-n8n-credential-labels-names-trimmed
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-122'
  recorded_at: '2025-02-07T13:27:54.000Z'
id: FACT-n8n-credential-labels-name-trimmed
type: fact
---
Credential label names in the n8n integration are trimmed of leading and trailing whitespace before they are saved.

Modeled from REQ-n8n-credential-labels-names-trimmed so the claim can be checked for contradictions.
