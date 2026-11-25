---
title: n8n.credential_labels case_variants_distinct = True
status: active
fact_kind: property_value
subject_key: n8n.credential_labels
property_key: case_variants_distinct
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-7F19756FE9B2E54D
claim_text: two credential labels that differ only by letter case are distinct
text_ref: REQ-n8n-credential-labels-case-sensitive-names
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-108'
  recorded_at: '2025-12-11T09:39:53.000Z'
id: FACT-n8n-credential-labels-case-variants-distinct
type: fact
---
Two credential labels that differ only by letter case are distinct.

Modeled from REQ-n8n-credential-labels-case-sensitive-names so the claim can be checked for contradictions.
