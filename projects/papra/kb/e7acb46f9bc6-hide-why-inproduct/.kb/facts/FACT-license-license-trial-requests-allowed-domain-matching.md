---
title: license.license_trial_requests allowed_domain_matching = domain and subdomains
status: active
fact_kind: property_value
subject_key: license.license_trial_requests
property_key: allowed_domain_matching
operator: eq
value_type: string
value_string: domain and subdomains
claim_key: CLAIM-D099BE40CCD3DE56
claim_text: When an allowed-domain list is configured for license trial requests, subdomains of a listed domain are accepted as well
text_ref: REQ-license-license-trial-requests-allowed-domains
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-102'
  recorded_at: '2026-08-27T09:05:02.000Z'
id: FACT-license-license-trial-requests-allowed-domain-matching
type: fact
---
When an allowed-domain list is configured for license trial requests, subdomains of a listed domain are accepted as well.

Modeled from REQ-license-license-trial-requests-allowed-domains so the claim can be checked for contradictions.
