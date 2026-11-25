---
title: n8n.credential_labels maximum_count = 30
status: active
fact_kind: property_value
subject_key: n8n.credential_labels
property_key: maximum_count
operator: eq
value_type: int
value_int: 30
claim_key: CLAIM-B54577BBA56DC261
claim_text: At most 30 credential labels can be created per workflow in the n8n integration
text_ref: REQ-n8n-credential-labels-maximum-count
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-109'
  recorded_at: '2025-11-19T12:48:38.000Z'
id: FACT-n8n-credential-labels-maximum-count
type: fact
---
At most 30 credential labels can be created per workflow in the n8n integration.

Modeled from REQ-n8n-credential-labels-maximum-count so the claim can be checked for contradictions.
