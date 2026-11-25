---
title: auth.registration_e2e email_and_password_sign_up_is_rejected = True
status: active
fact_kind: property_value
subject_key: auth.registration_e2e
property_key: email_and_password_sign_up_is_rejected
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-356F6278FDDC2EA3
claim_text: When registration is disabled, email and password sign-up is rejected
text_ref: REQ-papra-auth-email-and-password-sign-up-is-rejected
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-526'
  recorded_at: '2026-08-01T14:49:29.000Z'
id: FACT-papra-auth-registration-e2e-email-and-password-sign-up-is-rejected
type: fact
---
When registration is disabled, email and password sign-up is rejected.

Modeled from REQ-papra-auth-email-and-password-sign-up-is-rejected so the claim can be checked for contradictions.
