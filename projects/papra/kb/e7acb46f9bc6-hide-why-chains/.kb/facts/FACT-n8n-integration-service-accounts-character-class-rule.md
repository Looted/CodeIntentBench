---
title: n8n.integration_service_accounts character_class_rule = False
status: active
fact_kind: property_value
subject_key: n8n.integration_service_accounts
property_key: character_class_rule
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-3BB7AA89852B2146
claim_text: there is no rule about character classes
text_ref: REQ-n8n-integration-service-accounts-password-length
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-207'
  recorded_at: '2025-02-23T15:28:21.000Z'
id: FACT-n8n-integration-service-accounts-character-class-rule
type: fact
---
There is no rule about character classes.

Modeled from REQ-n8n-integration-service-accounts-password-length so the claim can be checked for contradictions.
