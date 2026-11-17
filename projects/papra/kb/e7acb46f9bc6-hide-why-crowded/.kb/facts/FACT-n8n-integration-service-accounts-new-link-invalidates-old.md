---
title: n8n.integration_service_accounts new_link_invalidates_old = True
status: active
fact_kind: property_value
subject_key: n8n.integration_service_accounts
property_key: new_link_invalidates_old
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-A6758D585E12B6CF
claim_text: requesting a new link invalidates the earlier ones
text_ref: REQ-n8n-integration-service-accounts-reset-link-single-use
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-183'
  recorded_at: '2025-06-20T15:58:36.000Z'
id: FACT-n8n-integration-service-accounts-new-link-invalidates-old
type: fact
---
Requesting a new link invalidates the earlier ones.

Modeled from REQ-n8n-integration-service-accounts-reset-link-single-use so the claim can be checked for contradictions.
