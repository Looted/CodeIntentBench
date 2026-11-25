---
title: auth.signup_email_domains allowlist_includes_subdomains = True
status: deprecated
fact_kind: property_value
subject_key: auth.signup_email_domains
property_key: allowlist_includes_subdomains
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-88DF676B4BF9682A
claim_text: When an allowed-domain list is configured, emails whose domain is in the list or is a subdomain of a listed domain may sign up
text_ref: REQ-papra-signup-allowed-domains-include-subdomains
tags:
  - lane:strict
  - knowledge-source:papra-server-decisions
origin:
  kind: agent
  ref: 'Papra server decision log: SRV-156'
  recorded_at: '2025-10-29T09:38:14.000Z'
id: FACT-papra-auth-signup-email-domains-allowlist-includes-subdomains-d41924
type: fact
---
When an allowed-domain list is configured, emails whose domain is in the list or is a subdomain of a listed domain may sign up.

Modeled from REQ-papra-signup-allowed-domains-include-subdomains so the claim can be checked for contradictions.
