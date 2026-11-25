---
title: n8n.credential_labels delete_in_use = detached
status: active
fact_kind: property_value
subject_key: n8n.credential_labels
property_key: delete_in_use
operator: eq
value_type: string
value_string: detached
claim_key: CLAIM-29B8A15AAA3DD419
claim_text: Deleting a credential label in the n8n integration removes it from everything that uses it, without confirmation for each use
text_ref: REQ-n8n-credential-labels-delete-in-use
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-125'
  recorded_at: '2025-07-05T16:45:18.000Z'
id: FACT-n8n-credential-labels-delete-in-use
type: fact
---
Deleting a credential label in the n8n integration removes it from everything that uses it, without confirmation for each use.

Modeled from REQ-n8n-credential-labels-delete-in-use so the claim can be checked for contradictions.
