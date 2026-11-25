---
title: n8n.credential_labels name_max_length = 40
status: active
fact_kind: property_value
subject_key: n8n.credential_labels
property_key: name_max_length
operator: eq
value_type: int
value_int: 40
claim_key: CLAIM-749604E85782F634
claim_text: Credential label names in the n8n integration are limited to 40 characters
text_ref: REQ-n8n-credential-labels-name-length
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-114'
  recorded_at: '2026-05-23T14:38:48.000Z'
id: FACT-n8n-credential-labels-name-max-length
type: fact
---
Credential label names in the n8n integration are limited to 40 characters.

Modeled from REQ-n8n-credential-labels-name-length so the claim can be checked for contradictions.
