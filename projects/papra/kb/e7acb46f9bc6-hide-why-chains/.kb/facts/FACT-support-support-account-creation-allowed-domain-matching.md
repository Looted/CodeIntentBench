---
title: support.support_account_creation allowed_domain_matching = domain and subdomains
status: active
fact_kind: property_value
subject_key: support.support_account_creation
property_key: allowed_domain_matching
operator: eq
value_type: string
value_string: domain and subdomains
claim_key: CLAIM-35E6A4695C971827
claim_text: When an allowed-domain list is configured for support portal account creation, subdomains of a listed domain are accepted as well
text_ref: REQ-support-support-account-creation-allowed-domains
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-266'
  recorded_at: '2025-10-28T15:28:18.000Z'
id: FACT-support-support-account-creation-allowed-domain-matching
type: fact
---
When an allowed-domain list is configured for support portal account creation, subdomains of a listed domain are accepted as well.

Modeled from REQ-support-support-account-creation-allowed-domains so the claim can be checked for contradictions.
