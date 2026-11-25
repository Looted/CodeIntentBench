---
title: auth.signup_email_domains allowlist_match = exact_domain
status: active
fact_kind: property_value
subject_key: auth.signup_email_domains
property_key: allowlist_match
operator: eq
value_type: string
value_string: exact_domain
claim_key: CLAIM-5B046718D5E1B7F3
claim_text: When an allowed-domain list is configured, only emails whose domain is exactly in the list may sign up
text_ref: REQ-papra-signup-email-domain-restrictions
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): app/auth/auth.models.test.ts#signup-email-domain-restrictions'
  recorded_at: '2026-11-16T13:16:20.813Z'
id: FACT-papra-auth-signup-email-domains-allowlist-match
type: fact
---
When an allowed-domain list is configured, only emails whose domain is exactly in the list may sign up.

Modeled from REQ-papra-signup-email-domain-restrictions so the claim can be checked for contradictions.
