---
title: n8n.credential_labels batch_maximum = 10
status: active
fact_kind: property_value
subject_key: n8n.credential_labels
property_key: batch_maximum
operator: eq
value_type: int
value_int: 10
claim_key: CLAIM-389304491E367B33
claim_text: At most 10 credential labels can be added or removed in one request in the n8n integration
text_ref: REQ-n8n-credential-labels-batch-size
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-127'
  recorded_at: '2025-08-20T10:05:49.000Z'
id: FACT-n8n-credential-labels-batch-maximum
type: fact
---
At most 10 credential labels can be added or removed in one request in the n8n integration.

Modeled from REQ-n8n-credential-labels-batch-size so the claim can be checked for contradictions.
