---
title: n8n.credential_labels empty_name_refused = True
status: active
fact_kind: property_value
subject_key: n8n.credential_labels
property_key: empty_name_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-70D5F8163A64221A
claim_text: a name that is empty after trimming is refused
text_ref: REQ-n8n-credential-labels-names-trimmed
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-122'
  recorded_at: '2025-02-07T13:27:54.000Z'
id: FACT-n8n-credential-labels-empty-name-refused
type: fact
---
A name that is empty after trimming is refused.

Modeled from REQ-n8n-credential-labels-names-trimmed so the claim can be checked for contradictions.
