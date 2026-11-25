---
title: auth.email_verification_e2e users_can_login_immediately_after_signup_when_email = True
status: active
fact_kind: property_value
subject_key: auth.email_verification_e2e
property_key: users_can_login_immediately_after_signup_when_email
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-420B18ADE02705DE
claim_text: Users can login immediately after signup when email verification is disabled
text_ref: REQ-papra-auth-users-can-login-immediately-after-signup-when
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-524'
  recorded_at: '2025-09-21T13:20:07.000Z'
id: FACT-papra-auth-email-verification-e2e-users-can-login-immediately-after-signup-when-email
type: fact
---
Users can login immediately after signup when email verification is disabled.

Modeled from REQ-papra-auth-users-can-login-immediately-after-signup-when so the claim can be checked for contradictions.
