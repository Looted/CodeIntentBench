---
title: portal.partner_registration allowed_domain_matching = exact domain
status: active
fact_kind: property_value
subject_key: portal.partner_registration
property_key: allowed_domain_matching
operator: eq
value_type: string
value_string: exact domain
claim_key: CLAIM-FF7BCBA44A762C6D
claim_text: When an allowed-domain list is configured for partner portal registration, only addresses whose domain is exactly on the list are accepted
text_ref: REQ-portal-partner-registration-allowed-domains
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-258'
  recorded_at: '2025-10-02T12:19:17.000Z'
id: FACT-portal-partner-registration-allowed-domain-matching
type: fact
---
When an allowed-domain list is configured for partner portal registration, only addresses whose domain is exactly on the list are accepted.

Modeled from REQ-portal-partner-registration-allowed-domains so the claim can be checked for contradictions.
