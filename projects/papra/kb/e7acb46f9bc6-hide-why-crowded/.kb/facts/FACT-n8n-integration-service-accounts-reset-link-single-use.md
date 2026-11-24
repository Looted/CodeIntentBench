---
title: n8n.integration_service_accounts reset_link_single_use = True
status: active
fact_kind: property_value
subject_key: n8n.integration_service_accounts
property_key: reset_link_single_use
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-9A9BA31259A8A97B
claim_text: A password reset link for integration service accounts works once
text_ref: REQ-n8n-integration-service-accounts-reset-link-single-use
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-183'
  recorded_at: '2025-06-20T15:58:36.000Z'
id: FACT-n8n-integration-service-accounts-reset-link-single-use
type: fact
---
A password reset link for integration service accounts works once.

Modeled from REQ-n8n-integration-service-accounts-reset-link-single-use so the claim can be checked for contradictions.
