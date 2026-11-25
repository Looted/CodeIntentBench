---
title: auth.signup_email_domains case_sensitive = False
status: deprecated
fact_kind: property_value
subject_key: auth.signup_email_domains
property_key: case_sensitive
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-60CF58D4E953D85A
claim_text: Matching ignores case
text_ref: REQ-papra-signup-allowed-domains-include-subdomains
tags:
  - lane:strict
  - knowledge-source:papra-server-decisions
origin:
  kind: agent
  ref: 'Papra server decision log: SRV-156'
  recorded_at: '2025-10-29T09:38:14.000Z'
id: FACT-papra-auth-signup-email-domains-case-sensitive-d41924
type: fact
---
Matching ignores case.

Modeled from REQ-papra-signup-allowed-domains-include-subdomains so the claim can be checked for contradictions.
