---
title: mobile.beta_programme_sign_up allowed_domain_matching = domain and subdomains
status: active
fact_kind: property_value
subject_key: mobile.beta_programme_sign_up
property_key: allowed_domain_matching
operator: eq
value_type: string
value_string: domain and subdomains
claim_key: CLAIM-88D525BD5A8011F5
claim_text: When an allowed-domain list is configured for the mobile beta programme sign-up, subdomains of a listed domain are accepted as well
text_ref: REQ-mobile-beta-programme-sign-up-allowed-domains
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-209'
  recorded_at: '2026-04-05T17:14:29.000Z'
id: FACT-mobile-beta-programme-sign-up-allowed-domain-matching
type: fact
---
When an allowed-domain list is configured for the mobile beta programme sign-up, subdomains of a listed domain are accepted as well.

Modeled from REQ-mobile-beta-programme-sign-up-allowed-domains so the claim can be checked for contradictions.
