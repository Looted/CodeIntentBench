---
title: n8n.credential_labels limit_configurable = False
status: active
fact_kind: property_value
subject_key: n8n.credential_labels
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-9B85215C347D6099
claim_text: the limit is fixed
text_ref: REQ-n8n-credential-labels-maximum-count
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-109'
  recorded_at: '2025-11-19T12:48:38.000Z'
id: FACT-n8n-credential-labels-limit-configurable
type: fact
---
The limit is fixed.

Modeled from REQ-n8n-credential-labels-maximum-count so the claim can be checked for contradictions.
