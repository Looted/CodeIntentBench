---
title: auth.signup_email_domains allowlist_includes_subdomains = False
status: active
fact_kind: property_value
subject_key: auth.signup_email_domains
property_key: allowlist_includes_subdomains
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-B0C8A078F504F804
claim_text: subdomains are not implicitly allowed
text_ref: REQ-papra-signup-email-domain-restrictions
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): app/auth/auth.models.test.ts#signup-email-domain-restrictions'
  recorded_at: '2026-11-15T22:58:17.433Z'
id: FACT-papra-auth-signup-email-domains-allowlist-includes-subdomains
type: fact
---
Subdomains are not implicitly allowed.

Modeled from REQ-papra-signup-email-domain-restrictions so the claim can be checked for contradictions.
