---
title: marketplace.author_registration allowed_domain_matching = domain and subdomains
status: active
fact_kind: property_value
subject_key: marketplace.author_registration
property_key: allowed_domain_matching
operator: eq
value_type: string
value_string: domain and subdomains
claim_key: CLAIM-5D42607CAB4FDF47
claim_text: When an allowed-domain list is configured for template author registration, subdomains of a listed domain are accepted as well
text_ref: REQ-marketplace-author-registration-allowed-domains
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-207'
  recorded_at: '2025-10-06T17:20:23.000Z'
id: FACT-marketplace-author-registration-allowed-domain-matching
type: fact
---
When an allowed-domain list is configured for template author registration, subdomains of a listed domain are accepted as well.

Modeled from REQ-marketplace-author-registration-allowed-domains so the claim can be checked for contradictions.
