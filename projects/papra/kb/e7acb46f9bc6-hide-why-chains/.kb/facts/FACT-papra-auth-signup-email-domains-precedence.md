---
title: auth.signup_email_domains precedence = forbidden_over_allowed
status: active
fact_kind: property_value
subject_key: auth.signup_email_domains
property_key: precedence
operator: eq
value_type: string
value_string: forbidden_over_allowed
claim_key: CLAIM-A0990507365A4AA7
claim_text: A domain on the forbidden list is always rejected, even if it also appears on the allowed list
text_ref: REQ-papra-signup-email-domain-restrictions
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): app/auth/auth.models.test.ts#signup-email-domain-restrictions'
  recorded_at: '2026-11-16T13:16:22.183Z'
id: FACT-papra-auth-signup-email-domains-precedence
type: fact
---
A domain on the forbidden list is always rejected, even if it also appears on the allowed list.

Modeled from REQ-papra-signup-email-domain-restrictions so the claim can be checked for contradictions.
