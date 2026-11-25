---
title: n8n.credential_labels maximum_count = 20
status: deprecated
fact_kind: property_value
subject_key: n8n.credential_labels
property_key: maximum_count
operator: eq
value_type: int
value_int: 20
claim_key: CLAIM-F3BE2985CDBDCBBD
claim_text: At most 20 credential labels can be created per workflow in the n8n integration
text_ref: REQ-n8n-credential-labels-maximum-count-earlier
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-39'
  recorded_at: '2025-10-12T11:28:10.000Z'
id: FACT-n8n-credential-labels-maximum-count-earlier
type: fact
---
At most 20 credential labels can be created per workflow in the n8n integration.

Modeled from REQ-n8n-credential-labels-maximum-count-earlier so the claim can be checked for contradictions.
