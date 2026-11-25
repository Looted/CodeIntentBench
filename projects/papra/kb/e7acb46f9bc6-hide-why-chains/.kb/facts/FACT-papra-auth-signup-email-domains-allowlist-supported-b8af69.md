---
title: auth.signup_email_domains allowlist_supported = False
status: deprecated
fact_kind: property_value
subject_key: auth.signup_email_domains
property_key: allowlist_supported
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-054BE0632027D822
claim_text: Anyone can sign up with an email address on any domain
text_ref: REQ-papra-signup-any-email-domain
tags:
  - lane:strict
  - knowledge-source:papra-server-decisions
origin:
  kind: agent
  ref: 'Papra server decision log: SRV-081'
  recorded_at: '2025-02-24T12:05:47.000Z'
id: FACT-papra-auth-signup-email-domains-allowlist-supported-b8af69
type: fact
---
Anyone can sign up with an email address on any domain.

Modeled from REQ-papra-signup-any-email-domain so the claim can be checked for contradictions.
