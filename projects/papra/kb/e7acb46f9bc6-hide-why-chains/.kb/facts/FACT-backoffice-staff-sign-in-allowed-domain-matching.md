---
title: backoffice.staff_sign_in allowed_domain_matching = domain and subdomains
status: active
fact_kind: property_value
subject_key: backoffice.staff_sign_in
property_key: allowed_domain_matching
operator: eq
value_type: string
value_string: domain and subdomains
claim_key: CLAIM-4C89C73D381CED76
claim_text: When an allowed-domain list is configured for back office staff sign-in, subdomains of a listed domain are accepted as well
text_ref: REQ-backoffice-staff-sign-in-allowed-domains
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-410'
  recorded_at: '2025-05-22T14:22:26.000Z'
id: FACT-backoffice-staff-sign-in-allowed-domain-matching
type: fact
---
When an allowed-domain list is configured for back office staff sign-in, subdomains of a listed domain are accepted as well.

Modeled from REQ-backoffice-staff-sign-in-allowed-domains so the claim can be checked for contradictions.
