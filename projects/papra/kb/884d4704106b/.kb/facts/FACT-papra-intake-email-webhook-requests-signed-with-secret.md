---
title: intake_email.webhook requests_signed_with_secret = True
status: active
fact_kind: property_value
subject_key: intake_email.webhook
property_key: requests_signed_with_secret
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-D3CAD4102B89D99B
claim_text: Inbound intake email webhooks are signed with INTAKE_EMAILS_WEBHOOK_SECRET
text_ref: REQ-inbound-intake-email-webhooks-are-signed-w-27EFD88D
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra documentation site (apps/docs): 03-guides/01-intake-emails-with-owlrelay.mdx#webhook-secret'
  recorded_at: '2026-11-15T21:45:34.164Z'
id: FACT-papra-intake-email-webhook-requests-signed-with-secret
type: fact
---
Inbound intake email webhooks are signed with INTAKE_EMAILS_WEBHOOK_SECRET.

Modeled from REQ-inbound-intake-email-webhooks-are-signed-w-27EFD88D so the claim can be checked for contradictions.
