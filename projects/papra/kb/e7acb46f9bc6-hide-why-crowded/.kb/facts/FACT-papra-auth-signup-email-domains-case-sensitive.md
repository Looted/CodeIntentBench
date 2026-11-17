---
title: auth.signup_email_domains case_sensitive = False
status: active
fact_kind: property_value
subject_key: auth.signup_email_domains
property_key: case_sensitive
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-60CF58D4E953D85A
claim_text: Matching ignores case
text_ref: REQ-papra-signup-email-domain-restrictions
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): app/auth/auth.models.test.ts#signup-email-domain-restrictions'
  recorded_at: '2026-11-16T13:16:22.980Z'
id: FACT-papra-auth-signup-email-domains-case-sensitive
type: fact
---
Matching ignores case.

Modeled from REQ-papra-signup-email-domain-restrictions so the claim can be checked for contradictions.
